import mySql2, { RowDataPacket } from "mySql2";

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "pp_banco",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

// Forçamos a tipagem do Pool
const db = mySql2.createPool(dbConfig);

export { db };
