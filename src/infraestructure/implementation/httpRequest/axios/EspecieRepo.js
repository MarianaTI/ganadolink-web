import IEspecieRepo from "@/domain/repositories/IEspecieRepo";
import axios from "axios";

class EspecieRepo extends IEspecieRepo {
  constructor() {
    super();
    this.url = "http://localhost:3000/api/especies";
    this.urlId = "http://localhost:3000/api/especie/";
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
export default EspecieRepo;
