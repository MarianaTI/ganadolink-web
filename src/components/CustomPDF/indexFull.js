import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { DownloadPdfButton } from "@/styles/catalogue.style";
import { FaFilePdf } from "react-icons/fa";

const DownloadAllPDF = ({ orders }) => {

  const generatePDF = () => {
    const doc = new jsPDF();
    const titleFontSize = 15;
    const dataFontSize = 11.5;
    const columnTitleFontSize = 14; // Nuevo tamaño de fuente para los encabezados de las columnas
    const titleFirstLine = "DIRECCIÓN GENERAL DE GANADERÍA Y ACUACULTURA";
    const titleSecondLine = "GUÍA DE TRÁNSITO";
    const titleThirdLine = "DE GANADOS, PRODUCTOS Y SUBPRODUCTOS";
    const cardWidth = doc.internal.pageSize.width * 0.9; // 90% del ancho de la página
    const cardHeight = 80;
    const cardMargin = 20; // Aumentado el espacio entre cards
    const cardPadding = 10; // Aumentado el padding del card
    const cardDataYOffset = -5; // Desplazamiento vertical para los datos del card
    const signatureTitleFontSize = 16;
    const signatureNameFontSize = 13;

    const addPageWithOrderData = (order, index) => {
      if (index > 0) {
        doc.addPage(); // Agregar una nueva página para cada orden, excepto la primera
      }

      // Logo en la esquina superior izquierda
      const logoWidth = 32;
      const logoHeight = 32;
      const logoX = 10; // Ajustado a la izquierda
      const logoY = 10;
      doc.addImage('/img/Logo.png', 'PNG', logoX, logoY, logoWidth, logoHeight);

      // Títulos
      doc.setFontSize(titleFontSize);
      doc.text(titleFirstLine, doc.internal.pageSize.width / 2, 17, { align: "center" });
      doc.text(titleSecondLine, doc.internal.pageSize.width / 2, 27, { align: "center" });
      doc.text(titleThirdLine, doc.internal.pageSize.width / 2, 37, { align: "center" });

      const fecha = new Date().toLocaleDateString();
      const folio = "123456";
      const fechaX = 158; // Ajustado para alinear con el logo
      const fechaY = 50; // Posición debajo del logo
      doc.text(`Fecha: ${fecha}`, fechaX, fechaY);
      doc.text(`Folio: ${folio}`, fechaX, fechaY + 10); // Ajustado debajo de la fecha

      let yPos = 70; // Ajustado para que los cards comiencen más abajo

      orders.forEach((order, index) => {
        // Dibujar tarjeta
        doc.setDrawColor(0); // Color del borde
        doc.setFillColor(255); // Color del relleno
        doc.roundedRect((doc.internal.pageSize.width - cardWidth) / 2, yPos, cardWidth, cardHeight, 2, 2, 'FD');

        // Sidebar para el título "Arete siniiga"
        doc.setFillColor(200); // Color del relleno del sidebar
        const sidebarWidth = 30; // Ancho del sidebar
        doc.roundedRect((doc.internal.pageSize.width - cardWidth) / 2, yPos, sidebarWidth, cardHeight, 2, 2, 'FD');
        
        // Ajustar el tamaño de la fuente de los encabezados de las columnas
        doc.setFontSize(columnTitleFontSize);

        // Títulos del Arete siniiga dentro del sidebar
        doc.setTextColor(0);
        doc.text(`ARETE`, (doc.internal.pageSize.width - cardWidth) / 2 + cardPadding / 2, yPos + cardPadding);
        doc.text(`SINIIGA`, (doc.internal.pageSize.width - cardWidth) / 2 + cardPadding / 2, yPos + cardPadding + 8);

        // Datos del Arete siniiga
        doc.text(`${order.ganado[0].siniiga}`, (doc.internal.pageSize.width - cardWidth) / 2 + cardPadding / 2, yPos + cardPadding + 20);

        // Títulos y datos del ganado
        doc.setFontSize(columnTitleFontSize); // Tamaño de fuente para los encabezados de las columnas
        doc.text(`Ganado:`, (doc.internal.pageSize.width - cardWidth) / 2 + sidebarWidth + cardPadding - 5, yPos + cardPadding + cardDataYOffset);
        doc.setFontSize(dataFontSize); // Restaurar el tamaño de fuente original para los datos
        doc.text(`${order.ganado[0].siniiga}`, (doc.internal.pageSize.width - cardWidth) / 2 + sidebarWidth + cardPadding - 5, yPos + cardPadding + 10 + cardDataYOffset);

        // Títulos y datos del comprador
        doc.setFontSize(columnTitleFontSize); // Tamaño de fuente para los encabezados de las columnas
        doc.text(`Comprador:`, (doc.internal.pageSize.width - cardWidth) / 2 + sidebarWidth - 17 + cardWidth / 3 + cardPadding, yPos + cardPadding + cardDataYOffset);
        doc.setFontSize(dataFontSize); // Restaurar el tamaño de fuente original para los datos
        doc.text(`${order.comprador ? order.comprador.nombre : ''}`, (doc.internal.pageSize.width - cardWidth) / 2 + sidebarWidth - 17 + cardWidth / 3 + cardPadding, yPos + cardPadding + 10 + cardDataYOffset);

        // Títulos y datos del vendedor
        doc.setFontSize(columnTitleFontSize); // Tamaño de fuente para los encabezados de las columnas
        doc.text(`Vendedor:`, (doc.internal.pageSize.width - cardWidth) / 2 + sidebarWidth - 17 + 2 * (cardWidth / 3) + cardPadding, yPos + cardPadding + cardDataYOffset);
        doc.setFontSize(dataFontSize); // Restaurar el tamaño de fuente original para los datos
        doc.text(`${order.vendedor ? order.vendedor.nombre : ''}`, (doc.internal.pageSize.width - cardWidth) / 2 + sidebarWidth - 17 + 2 * (cardWidth / 3) + cardPadding, yPos + cardPadding + 10 + cardDataYOffset);

        // Ajustar el tamaño de la fuente de los datos
        doc.setFontSize(dataFontSize);

        // Datos del vehículo centrados debajo de las columnas
        const vehicleData = order.vehiculo ? `${order.vehiculo.marca} ${order.vehiculo.modelo}${order.vehiculo.placa ? ` (${order.vehiculo.placa})` : ''}` : '';
        doc.text(vehicleData, (doc.internal.pageSize.width) / 2.2, yPos + cardHeight - cardPadding);

        yPos += cardHeight + cardMargin;
      });

      // Agregar número de página
      const totalPages = doc.internal.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setFontSize(10);
        doc.setTextColor(150);
        doc.text(`Página ${i}`, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - 10, { align: "center" });
      }
    };

    addPageWithOrderData();

    // Firma digital personalizado
    const signatureXPos = cardPadding; // Posición horizontal de la firma
    const signatureYPos = doc.internal.pageSize.height - 30; // Posición vertical del título "Firma digital"
    doc.setFont("arial", "bold");
    doc.setTextColor(0); // Establecer color negro
    doc.setFontSize(signatureTitleFontSize); // Tamaño de fuente para el título "Firma digital"
    doc.text("Firma digital:", signatureXPos, signatureYPos); // Título "Firma digital"
    doc.setFont("times", "italic"); // Texto en cursiva
    doc.setFontSize(signatureNameFontSize); // Tamaño de fuente para el nombre "Danny"
    doc.text("Danny", signatureXPos, signatureYPos + 10); // Nombre "Danny"
    
    doc.save("catalogo.pdf");
  };

  return (
    <div>
      <DownloadPdfButton type="button" onClick={generatePDF}>
        Descargar PDF
        <FaFilePdf style={{ marginLeft: "5px" }} />
      </DownloadPdfButton>
    </div>
  );
};

export default DownloadAllPDF;