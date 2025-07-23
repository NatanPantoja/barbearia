import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    // Verificar se ele enviou um email
    if (!email) {
      throw new Error("Email incorretor");
    }

    const passwordhash = await hash(password, 8);

    // Verificar se  o email já está cadastrado
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("Usuario já cadastrado");
    }

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordhash,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
