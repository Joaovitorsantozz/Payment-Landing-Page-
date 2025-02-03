import jwt, { JwtPayload } from "jsonwebtoken";

export function authenticateToken(req: any, res: any, next: any) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  const tokenSemPrefixo = token.replace("Bearer ", "");

  jwt.verify(tokenSemPrefixo, "sua-chave-secreta", (err: any, decoded: any) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido" });
    }

    req.user = decoded as JwtPayload;
    next();
  });
}
