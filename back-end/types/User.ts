import { RowDataPacket } from "mySql2";
export interface User extends RowDataPacket {
  id: number;
  name: string;
  email: string;
  senha: string;
}

export interface NewUser {
  id: number;
  name: string;
  email: string;
  senha: string;
}
