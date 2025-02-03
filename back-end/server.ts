import express, { Request, Response } from "express";
import { router } from "./router";

const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`rodando na porta ${PORT}`);
});
