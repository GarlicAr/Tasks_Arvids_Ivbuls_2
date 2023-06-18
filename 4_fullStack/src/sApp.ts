import exp from "constants";
import {Application} from "express";
import express from "express";
import moment from "moment";
import cluster from "cluster";
import os from "os";
import nodemailer from "nodemailer";
import fs from "fs";
import * as _ from "lodash";
import swaggerUi from  "swagger-ui-express";
//import {RegisterRoutes} from "./src/routers/routes";

import { ControllerDummy } from "./controllers/ControllerDummy";
import { ControllerUsers } from "./controllers/ControllerUsers";


const PORT = 8000;
const app: Application = express();

app.use(express.json());
app.use(express.static("public"));
app.use("/docs",
swaggerUi.serve,
swaggerUi.setup(undefined, {
    swaggerOptions: {
        url: "/swagger.json",
    },
},
));

app.post("/user/register", async (req, res) => {
    const { email } = req.body;
    
    //Todo

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
        to: email,
        subject: 'Registration successfull!',
        text: 'Your register was succesfull!',


    })

  });

app.listen(PORT, () => {
    console.log(`server running on localhost:${PORT}`);
});