import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ButtonStyled } from '../components/CustomButton/index.style';
import { Container, Form, Input, InputContainer, SearchIcon, Table, Th, Td, DownloadButton, DownloadPdfButton, Title, Line } from '../styles/catalogue.style';
import { FaSearch, FaDownload, FaFilePdf } from 'react-icons/fa';

const CatalogPage = () => {
  // Estado para almacenar los datos de la API
  const [data, setData] = useState([]);

  // Función que se ejecuta al cargar el componente para obtener los datos de la API
  useEffect(() => {
    fetchData();
  }, []);

  // Función para obtener el token de las cookies (simulada)
  const getTokenCookies = () => {
    return 'AQUÍ_DEBERÍAS_OBTENER_EL_TOKEN_DE_LAS_COOKIES';
  };

  // Función para realizar la petición a la API y actualizar el estado con los datos obtenidos
  const fetchData = async () => {
    try {
      const token = getTokenCookies();
      const response = await axios.get('URL_DE_TU_API', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Función para manejar el envío del formulario (aún no implementada)
  const onSubmit = (formData) => {
    console.log(formData);
  };

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
            <Th>Sexo</Th>
            <Th>Color</Th>
            <Th>Raza</Th>
            <Th>Arete siniiga</Th>
            <Th>Figura de herraje</Th>
            <Th>Acciones</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <Td>{item.numero_animal}</Td>
              <Td>{item.patente_factura}</Td>
              <Td>{item.sexo}</Td>
              <Td>{item.color}</Td>
              <Td>{item.raza}</Td>
              <Td>{item.arete_siniiga}</Td>
              <Td>
                <img src={`/img/${item.figura_herraje}.jpg`} alt={item.figura_herraje} style={{ width: '50px', height: 'auto' }} />
              </Td>
              <Td>
                <DownloadButton>
                  <FaDownload />
                </DownloadButton>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '275px' }}>
        <ButtonStyled style={{ marginRight: '10px' }}>Continuar</ButtonStyled>
        <ButtonStyled>Cancelar</ButtonStyled>
      </div>
    </Container>
  );
};

export default CatalogPage;