import { db } from "./config/database";

import { NewUser, User } from "./types/User";
import { RowDataPacket, ResultSetHeader } from "mySql2";
export class UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const [rows] = await db
      .promise()
      .query<User[]>("SELECT * FROM pp_usuarios WHERE email = ?", [email]);
    return rows[0] || null;
  }
  async findById(id: number): Promise<User | null> {
    const [rows] = await db
      .promise()
      .query<User[]>("SELECT * FROM pp_usuarios WHERE id=?", [id]);
    return rows[0] || null;
  }
  async update(userId: number, field: string, value: any): Promise<boolean> {
    const query = `UPDATE pp_usuarios SET ${field}=? WHERE id=?`;
    const [result] = await db
      .promise()
      .query<ResultSetHeader>(query, [value, userId]);

    return result.affectedRows > 0;
  }
  async create(user: Omit<User, "id">): Promise<NewUser> {
    const { name, email, senha } = user;
    //console.log("Usuario", user);
    try {
      const [result] = await db
        .promise()
        .query<ResultSetHeader>(
          "INSERT INTO pp_usuarios (email, name, senha) VALUES (?, ?, ?)",
          [email, name, senha]
        );

      return { id: result.insertId, name, email, senha };
    } catch (err) {
      console.log("erro ao criar", err);
      throw new Error("Erro ao criar usuário no banco de dados");
    }
  }
}
