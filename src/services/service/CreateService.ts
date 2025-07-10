import prismaClient from "../../prisma";

interface ServiceRequest {
  name: string;
  price: number;
  duration: number;
  image?: string; // opcional
  businessId: string;
}

class CreateService {
  async execute({ name, price, duration, image, businessId }: ServiceRequest) {
    const service = await prismaClient.service.create({
      data: {
        name,
        price,
        duration,
        image, // adiciona aqui
        businessId,
      },
    });

    return service;
  }
}

export { CreateService };
