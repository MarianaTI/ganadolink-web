import axios from "axios";
import IOrderRepo from "@/domain/repositories/IOrderRepo";

class OrderRepo extends IOrderRepo {
  constructor() {
    super();
    this.url = "http://localhost:3000/api/orders";
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
      const response = await axios.get(`${this.url}/${_id}`);

      if (response.data) {
        const ventaData = response.data;
        return new VentaGanado(
          ventaData._id,
          ventaData.patenteOFactura,
          ventaData.nombreVendedor,
          ventaData.nombreComprador,
          ventaData.tipoRaza,
          ventaData.areteSINIIGA,
          ventaData.modeloVehiculo,
          ventaData.sexo,
          ventaData.color,
        );
      } else {
        throw new Error("No data received from server");
      }
    } catch (error) {
      console.error("Error fetching venta de ganado:", error.message);
      throw error;
    }
  }

  // Creación de una orden con manejo de errores y validaciones
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
}

export default OrderRepo;
