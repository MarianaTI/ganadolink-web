import IMotivoRepo from "@/domain/repositories/IMotivoRepo";

class GetOneMotivoCase{
    constructor(motivoRepo){
        if(!(motivoRepo instanceof IMotivoRepo))
        throw new Error("motivoRepo must be instance of IMotivoRepo");
        this.motivoRepo = motivoRepo;
    }

    async run(_id){
        const motivo = this.motivoRepo.getOne(_id);
        return motivo;
    }
}

export default GetOneMotivoCase;