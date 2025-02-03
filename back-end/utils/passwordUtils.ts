import bcrypt from "bcrypt";

export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, 10);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  try {
    return bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.log("Erro ao comparar senha", error);
    return false;
  }
};
