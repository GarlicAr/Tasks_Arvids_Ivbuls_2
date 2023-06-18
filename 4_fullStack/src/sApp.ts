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

app.post("/user/register", (req, res) => {
    // Code to send confirmation email and handle user registration
    // You can access the necessary data from the request body (req.body)
    // Send confirmation URL to the provided email address
    res.send("Confirmation email sent.");
  });

app.listen(PORT, () => {
    console.log(`server running on localhost:${PORT}`);
});