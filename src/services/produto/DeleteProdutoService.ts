import prismaClient from "../../prisma";

interface DeleteProdutoRequest {
  produto_id: string;
}

class DeleteProdutoService {
  async execute({ produto_id }: DeleteProdutoRequest) {
    // Verifica se um ID foi realmente enviado
    if (!produto_id) {
      throw new Error("ID do produto é obrigatório.");
    }

    try {
      // O método 'delete' do Prisma precisa de um 'where' para saber qual item deletar
      const produtoDeletado = await prismaClient.produto.delete({
        where: {
          id: produto_id,
        },
      });

      return produtoDeletado;
    } catch (err) {
      // Captura o erro do Prisma caso o produto não seja encontrado
      throw new Error("Produto não encontrado ou já deletado.");
    }
  }
}

export { DeleteProdutoService };
