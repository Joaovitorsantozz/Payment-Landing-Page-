import { comparePassword, hashPassword } from "./utils/passwordUtils";
import { generateToken } from "./utils/jwtUtils";
import { UserRepository } from "./UserRepository";

export class AuthService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async login(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("User not Found");
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) throw new Error("Invalid Password");

    const token = generateToken(user.id);
    return token;
  }

  async register(name: string, email: string, password: string) {
    console.log("chamando metodo register no service");
    const hashedPassword = await hashPassword(password);
    const user = await this.userRepository.create({
      email,
      name,
      password: hashedPassword,
    });
    return user;
  }
}
