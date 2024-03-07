import React, { useState, useEffect } from "react";
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
  TdStyled,
} from "../styles/catalogue.style";
import { generatePDF } from "../components/CustomPDF/index";
import DownloadAllPDF from "../components/CustomPDF/indexFull";
import { FaSearch, FaDownload, FaFilePdf, FaEye } from "react-icons/fa";
import OrderRepo from "@/infraestructure/implementation/httpRequest/axios/OrderRepo";
import GetAllOrderUseCase from "@/application/usecases/orderUseCase/GetAllOrderUseCase";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CollapsibleTable from "@/components/CustomCollapsibleTable";
import { Divider } from "@mui/material";

const CatalogPage = () => {
  const [orders, setOrders] = useState([]);
  const [openRow, setOpenRow] = useState(null);

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

  const handleRowToggle = (index) => {
    setOpenRow(openRow === index ? null : index);
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  const handleDownloadPDF = (order) => {
    generatePDF(order);
  };

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
        <DownloadAllPDF orders={orders} />
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
          {orders?.map((item, index) => (
            <TrStyled key={index}>
              <td>{item.vendedor.nombre}</td>
              <td>{item.vendedor.nombre}</td>
              <td>{item.comprador.nombre}</td>
              <td>{item.id_especie.name}</td>
              <td>{item.ganado[0].siniiga}</td>
              <td>{item?.vehiculo?.marca}</td>
              {/* <td>
                <img src={`/img/${item.figura_herraje}.jpg`} alt={item.figura_herraje} style={{ width: '50px', height: 'auto' }} />
              </td> */}
              <td>
                <IconButton>
                  <FaDownload onClick={() => handleDownloadPDF(item)} />
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
