import { time } from "console";
import {Application} from "express";
import express from "express";
import moment from "moment";
import cluster from "cluster";
import os from "os";
import nodemailer from "nodemailer";
import * as _ from "lodash";

const PORT = 3000;
const IS_PRODUCTION = process.env.IS_PRODUCTION || false;

if(cluster.isPrimary){
    const cpu_count = os.cpus().length;
    console.log(`cpu count: ${cpu_count}`);
    for(let i = 0; i < cpu_count * 2; i++){
        console.log(`forking: ${i}`);
        cluster.fork();
    }
}
else{
    const app: Application = express();

    app.get('/', (req, res) => {
        let timeStart =  moment();
    
        while(true){
            let timeNow = moment();
            let msBetween = timeNow.diff(timeStart);
            if(msBetween > 10000){
                break;
            }
        };
    
        console.log('request ended!')
    
        res.send('hello world');
    });

    app.get('/send', async (req,res)=>{
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: false,
            auth:{
                user: 'arvidsivbuls@gmail.com',
                pass: 'password'
            }
        });

        let result =  await transporter.sendMail({
            from: 'arvidsivbuls@gmail.com',
            to: ['juris@inbox.lv', 'janis@gmail.com'],
            subject: 'E-pasta virsraksts',
            text: 'test',
            html: `<i> Stils </i>`

        })
    });


    app.get('/lodash/:par1/:par2/:par3',async (req, res) => {

        let listInputs = [];
        if(req.params.par1){
            listInputs.push(req.params.par1);
        }
        if(req.params.par2){
            listInputs.push(req.params.par2);
        }
        if(req.params.par3){
            listInputs.push(req.params.par3);
        }

        let filtered = _.filter(listInputs, (it) => it > 5);

        res.send(`result: ${JSON.stringify(filtered)}`)
        
    });
    
    app.listen(PORT, ()=>{
        console.log('Server running on localhost:'+PORT);
    });
}

