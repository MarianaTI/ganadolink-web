import IRoleRepo from "@/domain/repositories/IRoleRepo";

class GetAllRoleRepo {
  constructor(roleRepo) {
    if (!(roleRepo instanceof IRoleRepo))
      throw new Error("roleRepo must be instance of IRoleRepo");
    this.roleRepo = roleRepo;
  }

  async run() {
    const roles = this.roleRepo.getAll();
    return roles;
  }
}

export default GetAllRoleRepo;
