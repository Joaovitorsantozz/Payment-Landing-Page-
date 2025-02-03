import { Request, Response } from "express";
import { AuthService } from "./AuthService";

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async login(req: Request, res: Response) {
    const { email, senha } = req.body;

    try {
      const token = await this.authService.login(email, senha);
      if (token.success) res.json({ token });
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
}
