import { Request, Response } from "express";
import { CreateService } from "../../services/service/CreateService";

class CreateServiceController {
  async handle(req: Request, res: Response) {
    const { name, price, duration, businessId } = req.body;

    const createService = new CreateService();

    if (!req.file) {
      throw new Error("Image is required");
    } else {
      const { originalname, filename } = req.file;
      console.log(filename);

      const service = await createService.execute({
        name,
        price,
        duration,
        image: "",
        businessId,
      });

      return res.json(service);
    }
  }
}

export { CreateServiceController };
