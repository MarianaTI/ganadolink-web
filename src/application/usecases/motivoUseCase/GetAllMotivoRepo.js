import IMotivoRepo from "@/domain/repositories/IMotivoRepo";

class GetAllMotivoRepo {
  constructor(motivoRepo) {
    if (!(motivoRepo instanceof IMotivoRepo))
      throw new Error("especieRepo must be instance of IEspecieRepo");
    this.motivoRepo = motivoRepo;
  }

  async run() {
    const getMotivos = this.motivoRepo.getAll();
    return getMotivos;
  }
}

export default GetAllMotivoRepo;
