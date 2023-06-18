import {Body, Controller, Post, Get, Route} from "tsoa";
import express, { Request, Response, request } from "express";
import db from "./ControllerDatabase";
import * as query from "./ControllerDatabase";

const router = express.Router();
import { Query } from "typeorm/driver/Query";
import { UserLoginRequest } from "../models/messages/UserLoginRequest";
import { resourceLimits } from "worker_threads";
import { UserLoginResponse } from "../models/messages/UserLoginResponse";
import { UserRegisterResponse } from "../models/messages/UserRegisterResponse";
import { OrmTodo } from "../models/orm/OrmTodo";
import { UserResponse } from "../models/messages/UserResponse";



  
@Route("users")
export class ControllerUsers{

    @Post("register")
  public async registerUser(@Request() req: Express.Request): Promise<UserRegisterResponse> {
    const { email, password } = request.body;
    db.run(
      "INSERT INTO users (email, password) VALUES ('', '')",
      [email, password],
      (error) => {
        if (!error) {
            response.json({ message: "ok" });
        } else {
          response.json({
            message: "Error"
          })
        }
      }
    );

    const response: UserRegisterResponse = {
      message: "Success!",
    };
    return response;
  };

  @Get("confirmation/:uuid")
  public async checkUserActivation(@Request() req: Express.Request): Promise<boolean> {
    const uuid = request.params.uuid;

    //Todo

    
  }


    @Post("login")
    public async login( request: UserLoginRequest): Promise<UserLoginResponse>{
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


@Post("todos/add")
  public async addTodo(@Request() req: Express.Request): Promise<OrmTodo> {
    const { userId, title, description } = request.body;

    const todo: OrmTodo = {
      id: 1,
      //id generator
      userId,
      title,
      description,
    };

    return todo;
  }

  @Post("todos/list")
  public async listTodos(@Request() req: Express.Request): Promise<Todo[]> {
    const { userId } = request.body;

    
    const todos: OrmTodo[] = query.getTodosByUser(userId);

    return todos;
  }


  @Post("todos/remove")
  public async removeTodo(@Request() req: Express.Request): Promise<UserResponse> {
    const { todoId } = request.body;

    const result = await query.removeTodoById(todoId);

    if (result) {
      return { message: "Succes" };
    } else {
      return { message: "Fail!" };
    }
  }

  

}





