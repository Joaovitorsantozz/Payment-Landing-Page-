import Router from "express";
import { AuthController } from "./AuthController";
import { authenticateToken } from "./middleware/verifyToken";

const router = Router();
const authController = new AuthController();
router.post("/login", (req, res) => authController.login(req, res));
router.post("/register", (req, res) => authController.register(req, res));
router.get("/meu-perfil", authenticateToken);

export { router };
