import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Form, Input, InputContainer, SearchIcon, Table, Th, Td, DownloadButton, DownloadPdfButton, Title, Line, ContinueButton, CancelButton } from '../styles/catalogue.style';
import { FaSearch, FaDownload, FaFilePdf } from 'react-icons/fa';

const Catal = () => {
  const [data, setData] = useState([
    {
      numero_animal: '001',
      patente_factura: 'AB123',
      sexo: 'Macho',
      color: 'Negro',
      raza: 'Angus',
      arete_siniiga: '12345',
      figura_herraje: 'Cuadrado',
    },
    {
      numero_animal: '002',
      patente_factura: 'CD456',
      sexo: 'Hembra',
      color: 'Rojo',
      raza: 'Hereford',
      arete_siniiga: '67890',
      figura_herraje: 'Círculo',
    },
  ]);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Aquí se haría la búsqueda en la API
    console.log(data);
  };

  return (
    <Container>
      <Title style={{ marginLeft: '-1368px' }}>Catálogo</Title>
      <Line />
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Input type="text" placeholder="Buscar..." {...register('search')} />
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
        <ContinueButton>Continuar</ContinueButton>
        <CancelButton>Cancelar</CancelButton>
      </div>
    </Container>
  );
};

export default Catal;