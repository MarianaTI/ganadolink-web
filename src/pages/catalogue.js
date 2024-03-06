import React from "react";
import { useState, useEffect } from "react";
import {
  Container,
  Form,
  Input,
  InputContainer,
  SearchIcon,
  DownloadPdfButton,
  Title,
  Line,
  IconButton,
  TableStyled,
  TheadStyled,
  TrStyled,
} from "../styles/catalogue.style";
import { FaSearch, FaDownload, FaFilePdf, FaEye } from "react-icons/fa";
import OrderRepo from "@/infraestructure/implementation/httpRequest/axios/OrderRepo";
import GetAllOrderUseCase from "@/application/usecases/orderUseCase/GetAllOrderUseCase";

const CatalogPage = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrder = async () => {
    const orderRepo = new OrderRepo();
    const getAllOrderUseCase = new GetAllOrderUseCase(orderRepo);

    try {
      const orderData = await getAllOrderUseCase.run();
      console.log(orderData);
      setOrders(orderData.orders);
    } catch (error) {
      console.log(error);
    }
  };

  // Función para manejar el envío del formulario (aún no implementada)
  const onSubmit = (formData) => {
    console.log(formData);
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <Container>
      <Title>Catálogo</Title>
      <Line />
      <Form onSubmit={onSubmit}>
        <InputContainer>
          <Input type="text" placeholder="Buscar..." />
          <SearchIcon>
            <FaSearch style={{ color: "#888" }} />
          </SearchIcon>
        </InputContainer>
        <DownloadPdfButton>
          Descargar PDF
          <FaFilePdf style={{ marginLeft: "5px" }} />
        </DownloadPdfButton>
      </Form>
      <TableStyled>
        <TheadStyled>
          <TrStyled>
            <th>Patente o factura</th>
            <th>Nombre del vendedor</th>
            <th>Nombre del comprador</th>
            <th>Tipo de Raza</th>
            <th>Arete siniiga</th>
            <th>Modelo del vehiculo</th>
            <th>Acciones</th>
          </TrStyled>
        </TheadStyled>
        <tbody>
          {orders.map((item, index) => (
            <TrStyled key={index}>
              <td>{item.vendedor.nombre}</td>
              <td>{item.vendedor.nombre}</td>
              <td>{item.comprador.nombre}</td>
              <td>{item.id_especie.name}</td>
              <td>{item.ganado[0].siniiga}</td>
              <td>{item.vehiculo.marca}</td>
              {/* <td>
                <img src={`/img/${item.figura_herraje}.jpg`} alt={item.figura_herraje} style={{ width: '50px', height: 'auto' }} />
              </td> */}
              <td>
                <IconButton>
                  <FaDownload />
                </IconButton>
                <IconButton>
                  <FaEye />
                </IconButton>
              </td>
            </TrStyled>
          ))}
        </tbody>
      </TableStyled>
    </Container>
  );
};

export default CatalogPage;
