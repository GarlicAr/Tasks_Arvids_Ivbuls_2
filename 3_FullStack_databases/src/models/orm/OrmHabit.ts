import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn, ManyToOne } from "typeorm"
import { OrmUser } from "./OrmUser";
import { type } from "os";

@Entity({name: "habits"})
export class OrmHabit {

    @PrimaryGeneratedColumn()
    habit_id: number;

    @Column()
    habit: String;

    @Column()
    user_id: number;


    @ManyToOne(type => OrmUser, user => user.habits)
    @JoinColumn({ name: "user_id" })
    user: OrmUser;

}
