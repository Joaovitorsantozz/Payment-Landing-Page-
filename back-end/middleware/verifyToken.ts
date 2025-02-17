import jwt, { JwtPayload } from "jsonwebtoken";

export function authenticateToken(req: any, res: any, next: any) {
  const token = req.headers["authorization"];

  if (!token) {
    console.log("not token");
    return res.status(401).json({ message: "Token não fornecido" });
  }

  const tokenSemPrefixo = token.replace("Bearer ", "");

  jwt.verify(
    tokenSemPrefixo,
    "chave_de_assinatura_secreta_828",
    (err: any, decoded: any) => {
      if (err) {
        console.log("not token valid", err);
        return res.status(403).json({ message: "Token inválido" });
      }

      req.user = decoded as JwtPayload;
      next();
    }
  );
}
