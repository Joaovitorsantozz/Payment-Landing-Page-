import { comparePassword, hashPassword } from "./utils/passwordUtils";
import { generateToken } from "./utils/jwtUtils";
import { UserRepository } from "./UserRepository";

export class AuthService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async login(email: string, senha: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      return {
        success: false,
        message: "Usuário nao encontrado ou não existe",
      };
    }

    const isPasswordValid = await comparePassword(senha, user.senha);

    if (!isPasswordValid) {
      return {
        success: false,
        message: "Senha incorreta",
      };
    }
    const token = generateToken(user.id);

    return {
      success: true,
      token: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }

  async register(email: string, name: string, password: string) {
    try {
      const existingUser = await this.userRepository.findByEmail(email);

      if (existingUser) {
        return { success: false, message: "Usuário já existe" };
      }
      const hashedPassword = await hashPassword(password);

      const user = await this.userRepository.create({
        email,
        name,
        senha: hashedPassword,
      });
      if (!user) {
        return {
          success: false,
          message: "Erro ao criar usuário no banco de dados",
        };
      }

      return {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      };
    } catch (error) {
      // console.log("erro interno", error);
      return {
        success: false,
        message: "Erro interno ao verificar a requisição",
      };
    }
  }
}
