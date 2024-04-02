const { default: IOrderRepo} = require("@/domain/repositories/IOrderRepo");

class GetOneOrderUseCase{
    constructor(orderRepo){
        if(!(orderRepo instanceof IOrderRepo))
        throw new Error("orderRepo must be instance of IOrderRepo");
        this.orderRepo = orderRepo;
    }

    async run(_id){
        const order = this.orderRepo.getOne(_id);
        return order;
    }
}
export default GetOneOrderUseCase;