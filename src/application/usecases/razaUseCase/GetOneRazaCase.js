import IRazaRepo from "@/domain/repositories/IRazaRepo";

class GetOneRazaCase{
    constructor(razaRepo){
        if(!(razaRepo instanceof IRazaRepo))
        throw new Error("razaRepo must be instance of IRazaRepo");
        this.razaRepo = razaRepo;
    }

    async run(_id){
        const raza = this.razaRepo.getOne(_id);
        return raza;
    }
}

export default GetOneRazaCase;