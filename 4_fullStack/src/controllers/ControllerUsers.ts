import {Body, Controller, Post, Get, Route} from "tsoa";
import moment from "moment";
import cluster from "cluster";
import os from "os";
import nodemailer from "nodemailer";
import fs from "fs";
import * as _ from "lodash";
import { Query } from "typeorm/driver/Query";
import { UserLoginRequest } from "../models/messages/UserLoginRequest";
import { resourceLimits } from "worker_threads";
import { UserLoginResponse } from "../models/messages/UserLoginResponse";



@Route("users")
export class ControllerUsers{
    @Post("login")
    public async login(@Body() request: UserLoginRequest): Promise<UserLoginResponse>{
        let result: UserLoginResponse = {
            sessionToken: "",
            is_success: false
        };
        
        if(request.email == "test@test.com" && request.password === "test"){
            result.sessionToken = "something",
            result.is_success = true;
        }

        return result;

    }
}