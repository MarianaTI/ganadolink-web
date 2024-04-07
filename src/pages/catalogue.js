import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  Input,
  InputContainer,
  SearchIcon,
  Title,
  Line,
  IconButton,
  TableStyled,
  TheadStyled,
  TrStyled,
  CustomIcon,
  TableCollapsibleStyled,
  TitleTable,
} from "../styles/catalogue.style";
import { FaSearch } from "react-icons/fa";
import { generatePDF } from "../components/CustomPDF/index";
import DownloadAllPDF from "../components/CustomPDF/indexFull";
import OrderRepo from "@/infraestructure/implementation/httpRequest/axios/OrderRepo";
import GetAllOrderUseCase from "@/application/usecases/orderUseCase/GetAllOrderUseCase";
import { Skeleton } from "@mui/material";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import withAuth from "@/components/Authenticated";
import {
  faEye,
  faFileDownload,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const CatalogPage = () => {
  const route = useRouter();
  const [orders, setOrders] = useState([]);
  const [openRow, setOpenRow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const userRole = useSelector((state) => state.user.rol);

  const handleEditClick = (idForm) => {
    return route.push({
      pathname: "/[idForm]",
      query: { idForm: idForm },
    });
  };

  const fetchOrder = async () => {
    const orderRepo = new OrderRepo();
    const getAllOrderUseCase = new GetAllOrderUseCase(orderRepo);

    try {
      const orderData = await getAllOrderUseCase.run();
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

  const loading = () => {
    return (
      <div style={{ padding: "4px 16px" }}>
        <Skeleton variant="section" animation="wave" height={60} />
        <div style={{ marginTop: "24px" }}>
          <Skeleton variant="section" animation="wave" height={60} />
        </div>
        <div style={{ marginTop: "24px" }}>
          <Skeleton variant="section" animation="wave" height={400} />
        </div>
      </div>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        loading()
      ) : (
        <div>
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
                  <th>Folio</th>
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
                      <td>{item.ganado[0].patente}</td>
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
                        {(userRole === "SuperAdmin" ||
                          userRole === "admin") && (
                          <IconButton onClick={() => handleEditClick(item._id)}>
                            <FaPen />
                          </IconButton>
                        )}
                      </td>
                    </TrStyled>
                    {openRow === index && (
                      <tr>
                        <td colSpan="8">
                          <div
                            style={{
                              display: "flex",
                              gap: "32px",
                              width: "100%",
                            }}
                          >
                            <div style={{ flex: 1 }}>
                              <TitleTable>
                                <span>Datos del vendedor</span>
                              </TitleTable>
                              <TableCollapsibleStyled>
                                <TheadStyled style={{background: 'rgba(255, 229, 197, 0.5)'}}>
                                  <TrStyled>
                                    <th>Nombre</th>
                                    <th>Domicilio</th>
                                    <th>Municipio</th>
                                  </TrStyled>
                                </TheadStyled>
                                <tbody>
                                  {orders?.map((item, index) => (
                                    <TrStyled key={index}>
                                      <td>{item.vendedor.nombre}</td>
                                      <td>{item.vendedor.domicilio}</td>
                                      <td>{item.vendedor.municipio}</td>
                                    </TrStyled>
                                  ))}
                                </tbody>
                              </TableCollapsibleStyled>
                            </div>
                            <div style={{ flex: 1 }}>
                              <TitleTable>
                                <span>Datos del vendedor</span>
                              </TitleTable>
                              <TableCollapsibleStyled>
                                <TheadStyled style={{background: 'rgba(255, 229, 197, 0.5)'}}>
                                  <TrStyled>
                                    <th>Nombre</th>
                                    <th>Domicilio</th>
                                    <th>Municipio</th>
                                    <th>Predio</th>
                                  </TrStyled>
                                </TheadStyled>
                                <tbody>
                                  {orders?.map((item, index) => (
                                    <TrStyled key={index}>
                                      <td>{item.comprador.nombre}</td>
                                      <td>{item.comprador.domicilio}</td>
                                      <td>{item.comprador.municipio}</td>
                                      <td>{item.comprador.predio}</td>
                                    </TrStyled>
                                  ))}
                                </tbody>
                              </TableCollapsibleStyled>
                            </div>
                          </div>
                          <TitleTable>
                            <span>Datos del ganado</span>
                          </TitleTable>
                          <TableCollapsibleStyled>
                            <TheadStyled style={{background: 'rgba(255, 229, 197, 0.5)'}}>
                              <TrStyled>
                                <th>Patente</th>
                                <th>Sexo</th>
                                <th>Raza</th>
                                <th>Color</th>
                                <th>Arete siniiga</th>
                                <th>Figura de herraje</th>
                              </TrStyled>
                            </TheadStyled>
                            <tbody>
                              {item.ganado.map((ganadoItem, ganadoIndex) => (
                                <TrStyled key={ganadoIndex}>
                                  <td>{ganadoItem.patente}</td>
                                  <td>{ganadoItem.sexo}</td>
                                  <td>Raza</td>
                                  <td>{ganadoItem.color}</td>
                                  <td>{ganadoItem.siniiga}</td>
                                  <td>figura</td>
                                </TrStyled>
                              ))}
                            </tbody>
                          </TableCollapsibleStyled>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </TableStyled>
          </Container>
        </div>
      )}
    </>
  );
};

export default withAuth(CatalogPage);
