import IOrderRepo from "@/domain/repositories/IOrderRepo";

class UpdateOrderUseCase {
  constructor(orderRepo) {
    if (!(orderRepo instanceof IOrderRepo))
      throw new Error("orderRepo must be instance of IOrderRepo");
    this.orderRepo = orderRepo;
  }

  async run(order){
    try {
        const createdOrder = this.orderRepo.create(order);
        return createdOrder;
    } catch (error) {
        console.log('Error al crear la ordern:', error);
        throw error;
    }
  }
}

export default UpdateOrderUseCase;
