import { Request, Response } from "express";
import { CreateProdutoService } from "../../services/produto/CreateProdutoService";

class CreateProdutoController {
  async handle(req: Request, res: Response) {
    const createProdutoService = new CreateProdutoService();

    const produto = await createProdutoService.execute();

    return res.json(produto);
  }
}

export { CreateProdutoController };
