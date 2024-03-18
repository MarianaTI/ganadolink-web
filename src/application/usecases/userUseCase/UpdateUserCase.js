import IUserRepo from "@/domain/repositories/IUserRepo";

class UpdateUserUseCase {
  constructor(userRepo) {
    if (!(userRepo instanceof IUserRepo))
      throw new Error("userRepo must be instance of IUserRepo");
    this.userRepo = userRepo;
  }

  async run(userId, updates) {
    try {
      const updatedUser = await this.userRepo.update(userId, updates);
      return updatedUser;
    } catch (error) {
      console.log("Error updating user:", error);
      throw error;
    }
  }
}

export default UpdateUserUseCase;
