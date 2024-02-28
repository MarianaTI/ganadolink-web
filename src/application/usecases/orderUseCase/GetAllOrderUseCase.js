import IOrderRepo from "@/domain/repositories/IOrderRepo";

class GetAllOrderUseCase{
    constructor(orderRepo){
        if(!(orderRepo instanceof IOrderRepo))
        throw new Error("OrderRepo must be instance of IOrderRepo");
        this.orderRepo = orderRepo;
    }

    async run(){
        const getOrder = this.orderRepo.getAll();
        return getOrder;
    }
}

export default GetAllOrderUseCase;