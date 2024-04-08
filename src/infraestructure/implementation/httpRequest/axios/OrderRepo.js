import axios from "axios";
import IOrderRepo from "@/domain/repositories/IOrderRepo";

class OrderRepo extends IOrderRepo {
  constructor() {
    super();
    this.url = "http://localhost:3000/api/orders";
    this.urlId = "http://localhost:3000/api/order/";
    this.urlUpdate = "http://localhost:3000/api/orders/";
  }

  async getAll() {
    try {
      const response = await axios.get(this.url, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching ventas de ganado:", error.message);
      throw error;
    }
  }

  async getOne(_id) {
    try {
      const response = await axios.get(`${this.urlId}${_id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching venta de ganado:", error.message);
      throw error;
    }
  }

  async create(order) {
    try {
      const response = await axios.post(`${this.url}/create`, order, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (error) {
      console.error("Error al crear la orden:", error);
      throw error;
    }
  }

  async update(order) {
    try {
      const response = await axios.put(`${this.urlUpdate}put/${order._id}`, order, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (error) {
      console.error("Error al actualizar la orden:", error);
      throw error;
    }
  }
}

export default OrderRepo;
