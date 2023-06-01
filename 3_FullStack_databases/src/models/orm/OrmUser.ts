import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { OrmHabit } from "./OrmHabit";

@Entity({name: "users"})
export class OrmUser {

    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    is_deleted: boolean;

    @Column()
    created: Date;

    @OneToMany(type => OrmHabit, habit => habit.habit_id)
    habits: OrmHabit[];

}
