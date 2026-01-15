import IEspecieRepo from "@/domain/repositories/IEspecieRepo";

class GetOneEspecieCase{
    constructor(especieRepo){
        if(!(especieRepo instanceof IEspecieRepo))
        throw new Error("especieRepo must be instance of IEspecieRepo");
        this.especieRepo = especieRepo;
    }

    async run(_id){
        const especie = this.especieRepo.getOne(_id);
        return especie;
    }
}

export default GetOneEspecieCase;