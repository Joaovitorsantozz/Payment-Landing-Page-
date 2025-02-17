import { Request, Response } from "express";
import { AuthService } from "../service/AuthService";

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async login(req: Request, res: Response) {
    const { email, senha } = req.body;

    try {
      const token = await this.authService.login(email, senha);
      if (token.success) res.json({ token: token.token });
      else res.status(400).json({ error: token.message });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async register(req: Request, res: Response) {
    const { email, name, senha } = req.body;

    try {
      const user = await this.authService.register(email, name, senha);
      if (user.success) {
        res.status(201).json(user.user);
      } else {
        res.status(400).json({ error: user.message });
      }
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  }

  async getProfile(req: Request, res: Response) {
    const user = (req as any).user;
    const userId = user.userId;

    const finalUser = await this.authService.getProfile(userId);
    if (finalUser.success) {
      res.status(200).json(finalUser.user);
    } else {
      res.status(400).json({ error: finalUser.message });
    }
  }

  async UpdateProfile(req: Request, res: Response) {
    try {
      const user = (req as any).user;
      const userId = user.userId;
      const field = Object.keys(req.body)[0]; // Pegando o primeiro campo do req.body
      const value = req.body[field];

      if (!field || value === undefined) {
        return res
          .status(400)
          .json({ success: false, message: "Campo inválido." });
      }

      const updated = await this.authService.updateProfile(
        userId,
        field,
        value
      );

      if (!updated) {
        return res
          .status(500)
          .json({ success: false, message: "Erro ao atualizar perfil." });
      }

      res.json({ success: true, message: "Perfil atualizado com sucesso." });
    } catch (error) {
      res.status(500).json({ success: false, message: "Erro interno." });
    }
  }
}
