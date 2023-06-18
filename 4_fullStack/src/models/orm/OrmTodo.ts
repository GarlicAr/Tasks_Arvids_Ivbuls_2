import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { OrmUser } from "./OrmUser";

@Entity()
export class OrmTodo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => OrmUser, user => user.todos)
  user: OrmUser;
}
