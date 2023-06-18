import sqlite3 from "sqlite3";
import { OrmTodo } from "../models/orm/OrmTodo";

const DB_PATH = "asya_db";

const db = new sqlite3.Database(DB_PATH, (error) => {
  if (error) {
    console.error("Failed to connect to database:", error.message);
  } else {
    console.log("Connected");
  }
});


export function getTodosByUser(userId: number): Promise<OrmTodo[]> {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM todos WHERE userId = ?";
    db.all(query, [userId], (error, rows) => {
       
        const todos: OrmTodo[] = rows.map((row) => ({
          id: row.id,
          userId: row.userId,
          title: row.title,
          description: row.description,
        }));
        resolve(todos);
      
    });
  });
}

export function removeTodoById(todoId: number): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const query = "DELETE FROM todos WHERE id = ?";
    db.run(query, [todoId])
  });
}


export default db;
