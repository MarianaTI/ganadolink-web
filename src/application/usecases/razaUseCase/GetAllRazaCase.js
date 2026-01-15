import IRazaRepo from "@/domain/repositories/IRazaRepo";

class GetAllRazaCase{
    constructor(razaRepo){
        if(!(razaRepo instanceof IRazaRepo))
        throw new Error("razaRepo must be instance of IRazaRepo");
        this.razaRepo = razaRepo;
    }

    async run(){
        const getRazas = this.razaRepo.getAll();
        return getRazas;
    }
}

export default GetAllRazaCase;