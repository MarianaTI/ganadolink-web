import IRoleRepo from "@/domain/repositories/IRoleRepo";
import axios from "axios";

class RoleRepo extends IRoleRepo {
  constructor() {
    super();
    this.url = "http://localhost:3000/api/roles";
    this.urlId = "http://localhost:3000/api/role/";
  }

  async getAll() {
    const response = await axios.get(this.url);
    return response.data;
  }

  async getOne(_id){
    const response = await axios.get(`${this.urlId}${_id}`);
    return response.data;
  }
}
export default RoleRepo;
