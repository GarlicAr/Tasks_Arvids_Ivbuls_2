import * as express from "express";
import {Application} from "express";
import * as fs from "fs";
import * as multer from "multer";
import {ControllerDatabase} from "./controllers/ControllerDatabase";


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

