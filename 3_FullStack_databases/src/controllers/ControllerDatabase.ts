import { DataSource } from "typeorm";
import {DbUser} from "../models/db/DbUser";
import * as sha1 from "sha1";
//import sha1
import {DbSession} from "../models/db/DbSession";
import {v4 as uuidv4} from 'uuid';
import {OrmUser} from "../models/orm/OrmUser";
import {OrmSession} from "../models/orm/OrmSession";
import { OrmHabit } from "../models/orm/OrmHabit";

export class ControllerDatabase {
    //singleton
    private static _instance: ControllerDatabase;
    private constructor() {
        //init mysql
        this.dataSource = new DataSource({
            type: "mysql",
            database: "database_asya",
            username: "root",
            logging: true,
            password: "P",
            synchronize: false,
            entities: [
                OrmUser,
                OrmSession,
                OrmHabit
            ]
        })
    }

    



    public static get instance(): ControllerDatabase {
        if (!ControllerDatabase._instance) {
            ControllerDatabase._instance = new ControllerDatabase();
        }
        return ControllerDatabase._instance;
    }

    //datasource
    private dataSource: DataSource;

    public async connect(): Promise<void> {
        await this.dataSource.initialize();
    }

    //TODO

    public async loginOrm(

        email: string,
        password: string,

    ): Promise<OrmSession>{
        let session: OrmSession = null;
        let sha1Pass = sha1(password);
        let user: OrmUser = await this.dataSource.manager.findOne(OrmUser, {
            where: {
                email: email,
                password: sha1Pass
            }
        })
        if(user){
            session = new OrmSession();
            session.user_id = user.user_id
            session.token = uuidv4();
            session.is_valid = true;
            session.created = new Date();
            session.user = user;

            await this.dataSource.manager.save(session);

            session = await this.dataSource.manager.findOne(OrmSession, {
                where: {
                    session_id: session.session_id
                },
                relations: {
                    user: true
                }
            });

            console.log('login successfull!');
        }
        return session;
    }

    public async getSessionByToken(
        token: string
        ): Promise<OrmSession> {
        return await this.dataSource.manager.findOne(OrmSession, { where: { token } });
      }

    public async getHabitsByUserId(

        userId: number

        ): Promise<OrmHabit[]> {
        const habits = await this.dataSource.manager.find(OrmHabit, {
            where: {
                user_id: userId,
            },
    });
        return habits;
    }



    public async login(

        email: string,
        password: string,

    ): Promise<DbSession>{
        let session: DbSession =null;
        let sha1Pass = sha1(password);
        let rows = await this.dataSource.query(
            `SELECT * FROM users WHERE email = ? AND password = ? AND is_deleted = 0`,
            [email, sha1Pass]
        );
        if(rows.length > 0){
            let user: DbUser = {
                user_id: rows[0].user_id,
                email: rows[0].email,
                password: rows[0].password,
                is_deleted: rows[0].is_deleted,
                created: rows[0].created,
            };

            

            let sessionToken:string = uuidv4();

            await this.dataSource.query(
                "INSERT INTO session (user_id, token, is_valid) VALUES (?, ?, 1)",
                [user.user_id, sessionToken]
                );

                let rowLast = await this.dataSource.query("SELECT LAST_INSERT_ID() as session_id");


                rows = await this.dataSource.query("SELECT * FROM session JOIN users u on u.user_id = session.user_id " +
                "WHERE session.session_id = ?",
                [
                    session.session_id
                ])

                session = {
                    session_id: rowLast[0].session_id,
                    token: sessionToken,
                    user_id: user.user_id,
                    is_valid: true,
                    created: new Date(),
                    user: {
                        user_id: rows[0].user_id,
                        email: rows[0].email,
                        password: rows[0].password,
                        is_deleted: rows[0].is_deleted,
                        created: new Date(rows[0].created),
                    }
                };

                console.log('Succesfull login!');

        }
        else
        {
            console.log('unsuccesfull login!');




        }
        


        return session
    }

}