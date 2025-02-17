import { comparePassword, hashPassword } from "../utils/passwordUtils";
import { generateToken } from "../utils/jwtUtils";
import { UserRepository } from "../UserRepository";
import { Z_DATA_ERROR } from "zlib";
import { NewUser, User } from "./../types/User";
import { promises } from "dns";
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

  async updateProfile(id: number, field: string, value: any): Promise<Boolean> {
    const validFields = ["name", "email", "telefone", "idade"];
    if (!validFields.includes(field)) {
      throw new Error("campo nao existe");
    }

    return await this.userRepository.update(id, field, value);
  }
  async getProfile(id: number) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      return {
        success: false,
        message: "Usuário não encontrado com o mesmo id",
      };
    }

    return {
      success: true,
      user: {
        email: user.email,
        name: user.name,
        data_de_criacao: user.data_de_criacao,
        idade: user.idade,
        telefone: user.telefone,
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
