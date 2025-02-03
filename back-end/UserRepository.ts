import { db } from "./config/database";

import { NewUser, User } from "./types/User";
import { RowDataPacket, ResultSetHeader } from "mySql2";
export class UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const [rows] = await db
      .promise()
      .query<User[]>("SELECT * FROM pp_usuarios WHERE email = ?", [email]);
    return rows.length > 0 ? rows[0] : null;
  }

  async create(user: Omit<User, "id">): Promise<NewUser> {
    const { name, email, password } = user;

    const [result] = await db
      .promise()
      .query<ResultSetHeader>(
        "INSERT INTO pp_usuarios (email, name, senha) VALUES (?, ?, ?)",
        [email, name, password]
      );
    return { id: result.insertId, name, email, password };
  }
}
