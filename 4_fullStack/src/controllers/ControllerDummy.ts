import {Body, Controller, Post, Get, Route} from "tsoa";
import moment from "moment";
import cluster from "cluster";
import os from "os";
import nodemailer from "nodemailer";
import fs from "fs";
import * as _ from "lodash";
import { Query } from "typeorm/driver/Query";



@Route("dummy")
export class ControllerDummy{
    @Post("DummyFunction")
    public async DummyFunction( input_name: string): Promise<string>{
        let result =  "echo: "+ input_name;
        return result;

    }
}