import IRoleRepo from "@/domain/repositories/IRoleRepo";

class GetOneRoleRepo {
  constructor(roleRepo) {
    if (!(roleRepo instanceof IRoleRepo))
      throw new Error("roleRepo must be instance of IRoleRepo");
    this.roleRepo = roleRepo;
  }

  async run() {
    const roles = this.roleRepo.getOne();
    return roles;
  }
}

export default GetOneRoleRepo;