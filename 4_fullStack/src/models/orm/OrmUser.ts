import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { OrmTodo } from "./OrmTodo";

@Entity({ name: "users" })
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

  @OneToMany(() => OrmTodo, todo => todo.user)
  todos: OrmTodo[];
}
