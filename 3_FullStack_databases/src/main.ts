import * as express from "express";
import {Application} from "express";
import * as fs from "fs";
import * as multer from "multer";
import * as _ from 'lodash';
import {ControllerDatabase} from "./controllers/ControllerDatabase";
const nodemailer = require('nodemailer');


const main = async () => {
    try {
        const app: Application = express();
        const mult = multer();
        app.use(express.json());
        app.use(express.urlencoded({extended: true})); // get data from HTML forms
        app.use(mult.array("data"));

        await ControllerDatabase.instance.connect();
        let session = await ControllerDatabase.instance.loginOrm(
            "arvids@arvids.com",
            "lol"
        )

        app.post('/login', async (req, res) => {
            let response = {
                success: true
            };
            let request = req.body;
            let session = await ControllerDatabase.instance.login(
                request.email,
                request.password
            )
            res.json(response);
        });

        app.post('/get_habits', async (req, res) => {
            let response = {
                success: false,
                habits: []
            };
            const sessionToken = req.headers.authorization;
            if (sessionToken){
                const session = await ControllerDatabase.instance.getSessionByToken(sessionToken);
                console.log(session);
                if (session && session.is_valid) {
                    const habits = await ControllerDatabase.instance.getHabitsByUserId(session.user_id);
                    response.success = true;
                    response.habits = habits;
                  }
            }
            res.json(response);
        });

        app.get('/lodash/:par1/:par2/:par3',async (req, res) => {

            let listInputs = [];

            if(req.params.par1){
                listInputs.push(parseInt(req.params.par1 as string));
            }

            
            if(req.params.par2){
                listInputs.push(parseInt(req.params.par2 as string));
            }

            
            if(req.params.par3){
                listInputs.push(parseInt(req.params.par3 as string));
            }

            listInputs.push(_.random(0, 10));

            let filtered = _.filter(listInputs, (it) => it >5);


            res.send(`${JSON.stringify(filtered)}`);
            
        });

        
        app.get('/send',async (req, res) => {
            


            const transporter = nodemailer.createTransport({
                host: '',
                port: 465,
                secure: false,
                auth: {
                    user: '',
                    pass: ''
                }
            });



            let result = await transporter.sendMail({
                from: 'arvidsivbuls@gmail.com',
                to: ['janis@gmail.com', 'andris@gmail.com'],
                subject: 'E-pasta virsraksts',
                text: 'Parasta teksta e-pasts',
                html: '<i>Stila e-pasts</i>'
            })
            
        })

        app.listen(
            8000,
            () => {
                // http://127.0.0.1:8000
                console.log('Server started http://localhost:8000');
            }
        )



    }
    catch (e) {
        console.log(e);
    }
}
main();

