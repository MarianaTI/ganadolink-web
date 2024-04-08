import IOrderRepo from "@/domain/repositories/IOrderRepo";

class UpdateOrderUseCase {
  constructor(orderRepo) {
    if (!(orderRepo instanceof IOrderRepo))
      throw new Error("orderRepo must be instance of IOrderRepo");
    this.orderRepo = orderRepo;
  }

  async run(order){
    try {
        const updateOrder = this.orderRepo.update(order);
        return updateOrder;
    } catch (error) {
        console.log('Error al actualizar la order:', error);
        throw error;
    }
  }
}

export default UpdateOrderUseCase;
