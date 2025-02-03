import { Request, Response } from "express";
import { AuthService } from "./AuthService";

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const token = await this.authService.login(email, password);
      res.json({ token });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async register(req: Request, res: Response) {
    const { email, name, senha } = req.body;

    try {
      const user = await this.authService.register(email, name, senha);
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  }
}
