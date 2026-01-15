import IMotivoRepo from "@/domain/repositories/IMotivoRepo";
import axios from "axios";


class MotivoRepo extends IMotivoRepo {
  constructor() {
    super();
    this.url = "http://localhost:3000/api/motivos";
    this.urlId = "http://localhost:3000/api/motivo/";
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
export default MotivoRepo;