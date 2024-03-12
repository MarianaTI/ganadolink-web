import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { DownloadPdfButton } from "@/styles/catalogue.style";
import { FaFilePdf } from "react-icons/fa";

const DownloadAllPDF = ({ orders }) => {

  const generatePDF = () => {
    const doc = new jsPDF();
    const titleFontSize = 18;
    const dataFontSize = 12;
    const titleFirstLine = "Dirección general de ganadería y acuacultura";
    const titleSecondLine = "Guía de tránsito";
    const titleThirdLine = "de ganados, productos y subproductos";
    const cardWidth = doc.internal.pageSize.width * 0.9; // 90% del ancho de la página
    const cardHeight = 80;
    const cardMargin = 20; // Aumentado el espacio entre cards
    const cardPadding = 10; // Aumentado el padding del card

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
      const fechaX = 150; // Ajustado para alinear con el logo
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
        
        // Título del Arete siniga dentro del sidebar
        doc.setFontSize(dataFontSize);
        doc.setTextColor(0);
        doc.text(`ARETE`, (doc.internal.pageSize.width - cardWidth) / 2 + cardPadding / 2, yPos + cardPadding);
        doc.text(`SINIIGA`, (doc.internal.pageSize.width - cardWidth) / 2 + cardPadding / 2, yPos + cardPadding + 8);
        doc.text(`${order.ganado[0].siniiga}`, (doc.internal.pageSize.width - cardWidth) / 2 + cardPadding / 2, yPos + cardPadding + 20);


        // Datos del ganado
        doc.setFontSize(dataFontSize);
        doc.setTextColor(0);
        doc.text(`Ganado: ${order.ganado[0].siniiga}`, (doc.internal.pageSize.width - cardWidth) / 2 + sidebarWidth + cardPadding - 9, yPos + 2 * cardPadding);

        // Datos del comprador
        doc.text(`Comprador: ${order.comprador ? order.comprador.nombre : ''}`, (doc.internal.pageSize.width - cardWidth) / 2 + sidebarWidth -25 + cardWidth / 3 + cardPadding, yPos + 2 * cardPadding);

        // Datos del vendedor
        doc.text(`Vendedor: ${order.vendedor ? order.vendedor.nombre : ''}`, (doc.internal.pageSize.width - cardWidth) / 2 + sidebarWidth -25 + 2 * (cardWidth / 3) + cardPadding, yPos + 2 * cardPadding);

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