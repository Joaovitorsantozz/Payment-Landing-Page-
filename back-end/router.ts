import Router from "express";
import { AuthController } from "./controller/AuthController";
import { authenticateToken } from "./middleware/verifyToken";

const router = Router();
const authController = new AuthController();
router.post("/login", (req, res) => authController.login(req, res));
router.post("/register", (req, res) => authController.register(req, res));
router.get("/meu-perfil", authenticateToken, (req, res) =>
  authController.getProfile(req, res)
);
router.put("/editar-meuperfil", authenticateToken, (req, res) => {
  authController.UpdateProfile(req, res);
});

export { router };
