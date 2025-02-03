import Router from "express";
import { AuthController } from "./AuthController";

const router = Router();
const authController = new AuthController();
router.post("/login", authController.login);
router.post("/register", (req, res) => authController.register(req, res));
export { router };
