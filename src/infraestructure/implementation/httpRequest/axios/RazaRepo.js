import IRazaRepo from "@/domain/repositories/IRazaRepo";
import axios from "axios";


class RazaRepo extends IRazaRepo {
  constructor() {
    super();
    this.url = "http://localhost:3000/api/razas";
    this.urlId = "http://localhost:3000/api/raza/";
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
export default RazaRepo;
