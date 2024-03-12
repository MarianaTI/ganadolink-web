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
import { FaSearch, FaDownload, FaFilePdf, FaEye } from "react-icons/fa";
import { generatePDF } from "../components/CustomPDF/index";
import DownloadAllPDF from "../components/CustomPDF/indexFull";
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
            <th>Número de animales</th>
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
            <React.Fragment key={index}>
              <TrStyled>
                <td>{item._id}</td>
                <td>{item.vendedor.nombre}</td>
                <td>{item.vendedor.nombre}</td>
                <td>{item.comprador.nombre}</td>
                <td>{item.id_especie.name}</td>
                <td>{item.ganado[0].siniiga}</td>
                <td>{item?.vehiculo?.marca}</td>
                <td>
                <IconButton>
                  <FaDownload onClick={() => handleDownloadPDF(item)} />
                </IconButton>
                  <IconButton onClick={() => handleRowToggle(index)}>
                    <FaEye />
                  </IconButton>
                </td>
              </TrStyled>
              {openRow === index && (
              <TrStyled>
                <td colSpan="8" style={{ textAlign: "center" }}>
                  <div style={{ display: "inline-block" }}>
                    <Box sx={{ margin: 1, maxWidth: 800, minWidth: 800 }}>
                      <TableContainer component={Paper}>
                        <Typography
                          variant="h6"
                          gutterBottom
                          component="div"
                          align="center"
                        >
                          Datos
                        </Typography>

                        <Table aria-label="collapsible table">
                          <TableHead>
                            <TableRow>
                              <TableCell />
                              <TableCell align="center">Sexo</TableCell>
                              <TableCell align="center">Raza</TableCell>
                              <TableCell align="center">Color</TableCell>
                              <TableCell align="center">Siniiga</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell />
                              <TableCell align="center">
                                {item.ganado[0].sexo}
                              </TableCell>
                              <TableCell align="center">
                                {item.ganado[0]?.id_raza?.name}
                              </TableCell>
                              <TableCell align="center">
                                {item.ganado[0].color}
                              </TableCell>
                              <TableCell align="center">
                                {item.ganado[0].siniiga}
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  </div>
                </td>
              </TrStyled>
              )}
              
            </React.Fragment>
          ))}
        </tbody>
      </TableStyled>
    </Container>
  );
};

export default CatalogPage;