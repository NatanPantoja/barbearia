import { Request, Response } from "express";
import { DeleteProdutoService } from "../../services/produto/DeleteProdutoService";

class DeleteProdutoController {
  async handle(req: Request, res: Response) {
    // Pegamos o ID do produto do query parameter da URL
    const produto_id = req.query.id as string;

    const deleteProdutoService = new DeleteProdutoService();

    // Executa o serviço e passa o ID
    const produto = await deleteProdutoService.execute({
      produto_id,
    });

    // Retorna o produto que foi deletado como confirmação
    return res.json(produto);
  }
}

export { DeleteProdutoController };
