import React, { useState, useEffect } from "react";
import {
  Container,
  Input,
  InputContainer,
  SearchIcon,
  Title,
  Line,
  TableStyled,
  TrStyled,
  DataInfo,
  TitleTable,
  TableCollapsibleStyled,
  HeaderContainer,
  BottonContainer,
  ImageStyled,
  TdCollapsibleStyled,
  Section,
  TableButton,
  DateIcon,
  DataBuyerSeller,
  DataContainer,
  TableContainer,
  TableStyledAnimals,
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
import DeleteOrderUseCase from "@/application/usecases/orderUseCase/DeleteOrderUseCase";
import CustomAlerts from "@/components/CustomAlerts";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faMapLocationDot,
  faTrailer,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

const CatalogPage = () => {
  const route = useRouter();
  const [orders, setOrders] = useState([]);
  const [openRow, setOpenRow] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [orderIndexMap, setOrderIndexMap] = useState({});
  const userRole = useSelector((state) => state.user.rol);
  const [orderIdToDelete, setOrderIdToDelete] = useState(null);
  const [isOpen, setOpenDelete] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    show: false,
    title: "",
    text: "",
  });

  const orderRepo = new OrderRepo();
  const getAllOrderUseCase = new GetAllOrderUseCase(orderRepo);
  const [search, setSearch] = useState("");
  const [filterTerm, setFilterTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setFilterTerm(search);
    }
  };

  const filteredOrders = orders.filter((item) => {
    const searchLower = filterTerm.toLowerCase();
    return (
      item._id.toString().toLowerCase().includes(searchLower) ||
      item.ganado[0].patente.toLowerCase().includes(searchLower) ||
      item.vendedor.nombre.toLowerCase().includes(searchLower) ||
      item.comprador.nombre.toLowerCase().includes(searchLower) ||
      item.id_especie.name.toLowerCase().includes(searchLower) ||
      item.ganado[0].siniiga.toLowerCase().includes(searchLower) ||
      item?.vehiculo?.marca?.toLowerCase().includes(searchLower)
    );
  });

  const handleSearchClick = () => {
    setFilterTerm(search);
  };

  const handleEditClick = (idForm) => {
    return route.push({
      pathname: "/[idForm]",
      query: { idForm: idForm },
    });
  };

  const toggleDeleteModal = () => setOpenDelete((isOpen) => !isOpen);

  const handleDeleteClick = (orderId) => {
    setOrderIdToDelete(orderId);
    toggleDeleteModal();
  };

  const handleDeleteOrder = async () => {
    try {
      const deleteOrderUseCase = new DeleteOrderUseCase(orderRepo);
      const result = await deleteOrderUseCase.run(orderIdToDelete);
      setAlertInfo({
        show: true,
        title: "Eliminado correctamente",
        text: "La Orden se ha eliminado exitosamente",
      });
      setOrderIdToDelete(null);
      toggleDeleteModal();

      setOrders(orders.filter((order) => order._id !== orderIdToDelete));
    } catch (error) {
      setAlertInfo({
        show: true,
        title: "Error",
        text:
          `${error.message} - ${error.response.data.message}` ||
          "No se pudo completar la operación.",
      });
    }
  };

  const fetchOrder = async () => {
    try {
      const orderData = await getAllOrderUseCase.run();
      setOrders(orderData.orders);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRowToggle = (index) => {
    setOpenRow((prevOpenRow) => (prevOpenRow === index ? null : index));
  };

  useEffect(() => {
    const indexMap = {};
    orders.forEach((order, index) => {
      indexMap[order._id] = index;
    });
    setOrderIndexMap(indexMap);
  }, [orders]);

  const handleViewClick = (orderId) => {
    setSelectedOrderId(orderId);
    const index = orderIndexMap[orderId];
    if (index !== undefined) {
      handleRowToggle(index);
    }
  };

  const handleDownloadPDF = (order) => {
    generatePDF(order);
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  const formatCreatedAt = (createdAt) => {
    const meses = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];

    const fecha = new Date(createdAt);
    const dia = fecha.getDate();
    const mesNombre = meses[fecha.getMonth()];
    const anio = fecha.getFullYear();

    const fechaFormateada = `${
      dia < 10 ? "0" + dia : dia
    } de ${mesNombre} del ${anio}`;

    return fechaFormateada;
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
            <HeaderContainer>
              <InputContainer>
                <SearchIcon onClick={handleSearchClick}>
                  <FaSearch style={{ color: "#afafaf", fontSize: "15px" }} />
                </SearchIcon>
                <Input
                  type="text"
                  placeholder="Buscar..."
                  value={search}
                  onChange={handleSearchChange}
                  onKeyDown={handleEnterKey}
                />
              </InputContainer>
              <DownloadAllPDF orders={orders} />
            </HeaderContainer>
            <Section>
              <span>Todas las guías</span>
              <span>{filteredOrders.length} guías de tránsito disponibles</span>
            </Section>
            <TableStyled>
              <thead>
                <tr>
                  <th>Folio</th>
                  <th>Patente o factura</th>
                  <th>Nombre del vendedor</th>
                  <th>Nombre del comprador</th>
                  <th>Tipo de Raza</th>
                  <th>Arete siniiga</th>
                  <th>Modelo del vehiculo</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders && filteredOrders.length > 0 ? (
                  filteredOrders.map((item, index) => (
                    <React.Fragment key={index}>
                      <tr>
                        <td>{item._id}</td>
                        <td>{item.ganado[0].patente}</td>
                        <td>{item.vendedor.nombre}</td>
                        <td>{item.comprador.nombre}</td>
                        <td>{item.id_especie.name}</td>
                        <td>{item.ganado[0].siniiga}</td>
                        <td>{item?.vehiculo?.marca}</td>
                        <td>
                          <BottonContainer>
                            <TableButton
                              onClick={() => handleDownloadPDF(item)}
                            >
                              Descargar
                            </TableButton>
                            <Line />
                            <TableButton
                              onClick={() => handleViewClick(item._id)}
                            >
                              Ver
                            </TableButton>
                            <Line />
                            {(userRole === "SuperAdmin" ||
                              userRole === "admin") && (
                              <TableButton
                                onClick={() => handleEditClick(item._id)}
                              >
                                Editar
                              </TableButton>
                            )}
                            <Line />
                            {userRole === "SuperAdmin" && (
                              <div>
                                <TableButton
                                  onClick={() => handleDeleteClick(item._id)}
                                >
                                  Eliminar
                                </TableButton>
                              </div>
                            )}
                          </BottonContainer>
                        </td>
                      </tr>
                      {openRow === index && (
                        <tr>
                          <TdCollapsibleStyled colSpan="8">
                            <DataInfo>
                              <div>
                                <span className="title">
                                  {item.id_especie.name} - {item.id_motivo.name}
                                </span>
                              </div>
                              <div>
                                <DateIcon icon={faCalendar} />
                                <span className="date">
                                  {item.createdAt
                                    ? formatCreatedAt(item.createdAt)
                                    : "-"}
                                </span>
                              </div>
                            </DataInfo>
                            <DataContainer>
                              <div style={{ padding: "0 32px" }}>
                                <span className="title">
                                  Datos del vendedor
                                </span>
                                <div
                                  key={index}
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                >
                                  <span className="name">
                                    {item.vendedor.nombre}
                                  </span>
                                  <span>
                                    <DateIcon icon={faLocationDot} />
                                    {item.vendedor.domicilio},{" "}
                                    {item.vendedor.municipio}
                                  </span>
                                </div>
                              </div>
                              <div div style={{ padding: "0 32px" }}>
                                <span className="title">
                                  Datos del Comprador
                                </span>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                >
                                  <span className="name">
                                    {item.comprador.nombre}
                                  </span>
                                  <span>
                                    <DateIcon icon={faLocationDot} />
                                    {item.comprador.domicilio},{" "}
                                    {item.comprador.municipio}
                                  </span>
                                  <span>
                                    <DateIcon icon={faMapLocationDot} />
                                    {item.comprador.predio}
                                  </span>
                                </div>
                              </div>
                            </DataContainer>
                            <DataContainer>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  padding: "0 32px",
                                }}
                              >
                                <span className="title">
                                  Datos del vehículo
                                </span>
                                <span className="name">
                                  {item.vehiculo.nombre_operador_vehiculo}
                                </span>
                                <span>
                                  <DateIcon icon={faTruck} />
                                  {item.vehiculo.tipo} marca{" "}
                                  {item.vehiculo.marca} modelo{" "}
                                  {item.vehiculo.modelo} con placa{" "}
                                  {item.vehiculo.placa}
                                </span>
                                <span>
                                  <DateIcon icon={faTrailer} />
                                  Remolque color {item.vehiculo.color} con placa{" "}
                                  {item.vehiculo.placa}
                                </span>
                              </div>
                            </DataContainer>
                            <TableContainer>
                              <TitleTable>
                                <span>Datos del ganado</span>
                              </TitleTable>
                              <TableStyledAnimals>
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Patente</th>
                                    <th>Sexo</th>
                                    <th>Raza</th>
                                    <th>Color</th>
                                    <th>Arete siniiga</th>
                                    <th>Figura de herraje</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {item.ganado.map(
                                    (ganadoItem, ganadoIndex) => (
                                      <tr key={ganadoIndex}>
                                        <td>{ganadoIndex + 1}</td>
                                        <td>{ganadoItem.patente}</td>
                                        <td>{ganadoItem.sexo}</td>
                                        <td>{ganadoItem.id_raza?.name}</td>
                                        <td>{ganadoItem.color}</td>
                                        <td>{ganadoItem.siniiga}</td>
                                        <td>
                                          <ImageStyled
                                            src={ganadoItem.figura_herraje}
                                          />
                                        </td>
                                      </tr>
                                    )
                                  )}
                                </tbody>
                              </TableStyledAnimals>
                            </TableContainer>
                          </TdCollapsibleStyled>
                        </tr>
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8">Nada</td>
                  </tr>
                )}
              </tbody>
            </TableStyled>
            <CustomAlerts
              error="true"
              open={isOpen}
              onClose={toggleDeleteModal}
              title="Eliminar"
              text="¿Deseas eliminar la guía?"
              acceptButton="Aceptar"
              cancelButton="Cancelar"
              onClickContinue={handleDeleteOrder}
              onClickCancele={toggleDeleteModal}
            />
            {alertInfo.show && (
              <CustomAlerts
                open={alertInfo}
                onClose={() => setAlertInfo(false)}
                title={alertInfo.title}
                text={alertInfo.text}
                acceptButton="Aceptar"
                onClickContinue={() => setAlertInfo(false)}
                login
              />
            )}
          </Container>
        </div>
      )}
    </>
  );
};

export default withAuth(CatalogPage);
