import IEspecieRepo from "@/domain/repositories/IEspecieRepo";

class GetAllEspecieRepo{
    constructor(especieRepo){
        if(!(especieRepo instanceof IEspecieRepo))
        throw new Error("especieRepo must be instance of IEspecieRepo");
        this.especieRepo = especieRepo;
    }

    async run(){
        const getEspecies = this.especieRepo.getAll();
        return getEspecies;
    }
}

export default GetAllEspecieRepo;