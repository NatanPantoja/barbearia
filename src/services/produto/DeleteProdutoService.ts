import prismaClient from "../../prisma";

class DeleteService {
  async execute(serviceId: string) {
    const service = await prismaClient.service.delete({
      where: {
        id: serviceId,
      },
    });

    return service;
  }
}

export { DeleteService };
