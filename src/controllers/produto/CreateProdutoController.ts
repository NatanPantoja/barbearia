import { Request, Response } from "express";
import { CreateProdutoService } from "../../services/produto/CreateProdutoService";

class CreateProdutoController {
  async handle(req: Request, res: Response) {
    const { name, price, duration, description } = req.body;

    // --- BOA PRÁTICA: Limpando e tratando os dados ---
    const trimmedName = name ? name.trim() : "";
    const trimmedDescription = description ? description.trim() : "";
    const parsedPrice = price ? price.trim() : "";
    const parsedDuration = duration ? duration.trim() : "";

    const createProdutoService = new CreateProdutoService();

    if (!req.file) {
      throw new Error("Error uploading file");
    } else {
      const { filename: banner } = req.file;

      const produto = await createProdutoService.execute({
        name: trimmedName,
        price: parsedPrice,
        duration: Number(parsedDuration),
        description: trimmedDescription,
        banner,
      });

      return res.json(produto);
    }
  }
}

export { CreateProdutoController };
