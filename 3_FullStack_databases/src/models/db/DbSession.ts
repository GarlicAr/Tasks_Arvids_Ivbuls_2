import {DbUser} from "./DbUser";

export interface DbSession
{
    session_id:number;
    user_id:number;
    token: string;
    is_valid: boolean;
    created: Date;

    user?: DbUser;
}