import { Request, Response } from "express";
import { DeleteService } from "../../services/produto/DeleteProdutoService";

class DeleteServiceController {
  async handle(req: Request, res: Response) {
    const serviceId = req.params.id;

    const deleteService = new DeleteService();
    const service = await deleteService.execute(serviceId);

    return res.json(service);
  }
}

export { DeleteServiceController };
