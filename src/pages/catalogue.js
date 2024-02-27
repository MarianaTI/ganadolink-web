import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ButtonStyled } from '../components/CustomButton/index.style';
import { Container, Form, Input, InputContainer, SearchIcon, Table, Th, Td, DownloadPdfButton, Title, Line, CancelButton, IconButton } from '../styles/catalogue.style';
import { FaSearch, FaDownload, FaFilePdf, FaEye } from 'react-icons/fa';
import VentaGanadoRepo from "@/infraestructure/implementation/httpRequest/axios/OrderRepo";
import OrderRepo from '@/infraestructure/implementation/httpRequest/axios/OrderRepo';
import GetAllOrderUseCase from '@/application/usecases/orderUseCase/GetAllOrderUseCase';

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
    }

  // Función para manejar el envío del formulario (aún no implementada)
  const onSubmit = (formData) => {
    console.log(formData);
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <Container>
      <Title style={{ marginLeft: '-1368px' }}>Catálogo</Title>
      <Line />
      <Form onSubmit={onSubmit}>
        <InputContainer>
          <Input type="text" placeholder="Buscar..." />
          <SearchIcon>
            <FaSearch style={{ color: '#888' }} />
          </SearchIcon>
        </InputContainer>
        <DownloadPdfButton>
          Descargar PDF
          <FaFilePdf style={{ marginLeft: '5px' }} />
        </DownloadPdfButton>
      </Form>

      <Table>
        <thead>
          <tr>
            <Th>Número de animales</Th>
            <Th>Patente o factura</Th>
            <Th>Nombre del vendedor</Th>
            <Th>Nombre del comprador</Th>
            <Th>Tipo de Raza</Th>
            <Th>Arete siniiga</Th>
            <Th>Modelo del vehiculo</Th>
            <Th>Acciones</Th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item, index) => (
            <tr key={index}>
              <Td>{item._id}</Td>
              <Td>{item.vendedor.nombre}</Td>
              <Td>{item.vendedor.nombre}</Td>
              <Td>{item.comprador.nombre}</Td>
              <Td>{item.id_especie.name}</Td>
              <Td>{item.ganado[0].siniiga}</Td>
              <Td>{item.vehiculo.marca}</Td> 
              {/* <Td>
                <img src={`/img/${item.figura_herraje}.jpg`} alt={item.figura_herraje} style={{ width: '50px', height: 'auto' }} />
              </Td> */}
              <Td>
                <IconButton>
                  <FaDownload />
                </IconButton>
                <IconButton>
                  <FaEye />
                </IconButton>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '275px' }}>
        <ButtonStyled style={{ marginRight: '25px' }}>Continuar</ButtonStyled>
        <CancelButton>Cancelar</CancelButton>
      </div>
    </Container>
  );
};

export default CatalogPage;