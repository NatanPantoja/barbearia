import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    //Verificar se o email existe.
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error("User/password incorrect");
    }

    // preciso verificar se a senha que ele mandou está correta.
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Usuário ou senha incorreto");
    }

    // Se deu tudo certo vamos gerar o token pro usuario.
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("Usuário ou senha incorreto");
    }

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      secret,
      {
        subject: user.id,
        expiresIn: "30d",
      }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token,
    };
  }
}

export { AuthUserService };
