import React from 'react';
import { ButtonStyled } from '../components/CustomButton/index.style';
import { Container, Form, Input, InputContainer, SearchIcon, Table, Th, Td, DownloadButton, DownloadPdfButton, Title, Line, CancelButton } from '../styles/catalogue.style';
import { FaSearch, FaDownload, FaFilePdf } from 'react-icons/fa';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'; // Importa las funciones necesarias de pdf-lib

// Función para generar y descargar el PDF
const handleDownloadClick = async (data) => {
  try {
    // Crea un nuevo documento PDF
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage(); // Añade una página al documento
    const { width, height } = page.getSize();

    // Carga el logo de la empresa
    const logoResponse = await fetch('/img/Logo.png');
    const logoBuffer = await logoResponse.arrayBuffer();
    const logoImage = await pdfDoc.embedPng(logoBuffer);
    const logoWidth = 250;
    const logoHeight = logoWidth * (logoImage.height / logoImage.width); // Ajusta la altura proporcionalmente
    page.drawImage(logoImage, {
      x: width / 2 - logoWidth / 2,
      y: height - -50 - logoHeight, // Posiciona el logo en la parte superior de la página
      width: logoWidth,
      height: logoHeight,
    });

    // Centra el nombre de la empresa
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const nameWidth = helveticaFont.widthOfTextAtSize('Ganado Link', 24);
    page.drawText('Ganado Link', {
      x: width / 2 - nameWidth / 2, // Centra el texto horizontalmente
      y: height - -130 - logoHeight - 40, // Coloca el texto justo encima del logo
      size: 24,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });

    // Agrega los datos de la fila seleccionada en forma de lista
    const dataText = [
      `Número de animales: ${data.animals}`,
      `Patente o factura: ${data.patent}`,
      `Sexo: ${data.sex}`,
      `Color: ${data.color}`,
      `Raza: ${data.breed}`,
      `Arete siniiga: ${data.tag}`,
    ];
    const textHeight = 225; // Posiciona la lista de datos debajo del logo y el nombre de la empresa
    dataText.forEach((text, index) => {
      page.drawText(text, {
        x: 50,
        y: textHeight - index * 25, // Añade espacio entre cada línea de texto
        size: 20,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
    });

    // Genera el contenido del PDF como un blob
    const pdfBytes = await pdfDoc.save();

    // Crea un objeto URL para el blob generado
    const pdfUrl = URL.createObjectURL(new Blob([pdfBytes], { type: 'application/pdf' }));

    // Crea un enlace invisible y haz clic en él para descargar el PDF
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'catalogo.pdf');
    document.body.appendChild(link);
    link.click();
  } catch (error) {
    console.error('Error al generar el PDF:', error);
  }
};

const CatalogPage = () => {
  // Datos de la fila seleccionada (dummy data)
  const rowData = {
    animals: '123',
    patent: 'Factura 456',
    sex: 'Macho',
    color: 'Negro',
    breed: 'Raza 1',
    tag: '789',
  };

  return (
    <Container>
      <Title style={{ marginLeft: '-1368px' }}>Catálogo</Title>
      <Line />
      <Form>
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
          <tr>
            <Td>{rowData.animals}</Td>
            <Td>{rowData.patent}</Td>
            <Td>{rowData.sex}</Td>
            <Td>{rowData.color}</Td>
            <Td>{rowData.breed}</Td>
            <Td>{rowData.tag}</Td>
            <Td>
              <img src="/img/figura_herraje.jpg" alt="Figura de herraje" style={{ width: '50px', height: 'auto' }} />
            </Td>
            <Td>
              <DownloadButton onClick={() => handleDownloadClick(rowData)}> {/* Pasa los datos de la fila seleccionada */}
                <FaDownload />
              </DownloadButton>
            </Td>
          </tr>
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