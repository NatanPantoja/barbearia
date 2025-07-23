import prismaClient from "../../prisma";

class CreateProdutoService {
  async execute() {
    return { ok: true };
  }
}

export { CreateProdutoService };
