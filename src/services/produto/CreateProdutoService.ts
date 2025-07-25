import prismaClient from "../../prisma";

interface ProdutoRequest {
  name: string;
  price: string;
  duration: number;
  description?: string;
  banner?: string;
}
class CreateProdutoService {
  async execute({
    name,
    price,
    duration,
    description,
    banner,
  }: ProdutoRequest) {
    const produto = await prismaClient.produto.create({
      data: {
        name: name,
        price: parseFloat(price),
        duration: duration ? duration : 0,
        description: description ? description : "",
        banner: banner ? banner : "",
      },
    });

    return produto;
  }
}

export { CreateProdutoService };
