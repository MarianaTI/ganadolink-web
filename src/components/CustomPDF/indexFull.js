import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { DownloadPdfButton } from "@/styles/catalogue.style";
import { FaFilePdf } from "react-icons/fa";

const DownloadAllPDF = ({ orders }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    const titleFontSize = 15;
    const dataFontSize = 11.5;
    const columnTitleFontSize = 14;
    const titleFirstLine = "DIRECCIÓN GENERAL DE GANADERÍA Y ACUACULTURA";
    const titleSecondLine = "GUÍA DE TRÁNSITO";
    const titleThirdLine = "DE GANADOS, PRODUCTOS Y SUBPRODUCTOS";
    const cardWidth = doc.internal.pageSize.width * 0.9;
    const cardHeight = 80;
    const cardMargin = 20;
    const cardPadding = 10;
    const cardDataYOffset = -5;
    const signatureTitleFontSize = 16;
    const signatureNameFontSize = 10;
    const pageNumberFontSize = 10;

    let currentPageIndex = 0;
    let totalPages = 0;

    const addPageWithOrderData = (order1, order2) => {
      if (order1 || order2) {
        if (currentPageIndex > 0) {
          doc.addPage();
        }
        currentPageIndex++;
        totalPages++;

        addTitle();
        addLogoAndInfo();

        addCard(order1, 10 + 55);
        addCard(order2, cardHeight + cardMargin + 10 + 55);

        // Firma digital
        const signatureXPos = cardPadding;
        const signatureYPos = doc.internal.pageSize.height - 30 - pageNumberFontSize - 5; // Mover la firma hacia arriba por la altura de la página
        doc.setFont("Helvetica", "normal");
        doc.setTextColor(0);
        doc.setFontSize(signatureTitleFontSize);

        doc.text("Firma Digital:", signatureXPos, signatureYPos);
        doc.setFontSize(signatureNameFontSize);
        doc.text("Ganado Link | Corps.", signatureXPos, signatureYPos + 10);
        // Agregar dos espacios adicionales debajo del texto "Ganado Link | Corps."
        doc.text("", signatureXPos, signatureYPos + 16);        
        // Agregar línea debajo del texto "Ganado Link | Corps."
        doc.line(signatureXPos, signatureYPos + 14, signatureXPos + 50, signatureYPos + 14);
        // Agregar texto "Equipo #4 Master Mind"
        doc.setFontSize(signatureNameFontSize);
        doc.text("Equipo #4 Master Mind", signatureXPos, signatureYPos + 20); // Alejado un poco más

        // Número de página
        doc.setFontSize(pageNumberFontSize);
        doc.setTextColor(200); // Color gris claro para la paginación
        doc.text(`Página ${currentPageIndex}`, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - 10, { align: "center" });
      }
    };

    const addTitle = () => {
      const yPos = 10;
      doc.setFontSize(titleFontSize);
      doc.setTextColor(0); // Restaurar color de texto a negro
      doc.text(titleFirstLine, doc.internal.pageSize.width / 2, yPos + 5, { align: "center" });
      doc.text(titleSecondLine, doc.internal.pageSize.width / 2, yPos + 15, { align: "center" });
      doc.text(titleThirdLine, doc.internal.pageSize.width / 2, yPos + 25, { align: "center" });
    };

    const addLogoAndInfo = () => {
      const logoWidth = 32;
      const logoHeight = 32;
      const logoX = 10;
      const logoY = 39;
      doc.addImage("/img/Logo.png", "PNG", logoX, logoY, logoWidth, logoHeight);

      const fecha = new Date().toLocaleDateString();
      const folio = "123456";
      const fechaX = 158;
      const fechaY = 50;
      doc.setTextColor(0); // Restaurar color de texto a negro
      doc.text(`Fecha: ${fecha}`, fechaX, fechaY);
      doc.text(`Folio: ${folio}`, fechaX, fechaY + 10);
    };

    const addCard = (order, yPos) => {
      if (!order) return;
    
      doc.setDrawColor(0);
      doc.setFillColor(255);
      doc.roundedRect((doc.internal.pageSize.width - cardWidth) / 2, yPos, cardWidth, cardHeight, 2, 2, 'FD');
    
      const sidebarWidth = 30;
      doc.setFillColor(200);
      doc.roundedRect((doc.internal.pageSize.width - cardWidth) / 2, yPos, sidebarWidth, cardHeight, 2, 2, 'FD');
    
      doc.setFontSize(columnTitleFontSize);
      doc.setTextColor(0);
      doc.text(`ARETE`, (doc.internal.pageSize.width - cardWidth) / 2 + cardPadding / 2, yPos + cardPadding);
      doc.text(`SINIIGA`, (doc.internal.pageSize.width - cardWidth) / 2 + cardPadding / 2, yPos + cardPadding + 8);
    
      doc.text(`${order.ganado[0].siniiga}`, (doc.internal.pageSize.width - cardWidth) / 2 + cardPadding / 2, yPos + cardPadding + 20);

      doc.setFontSize(columnTitleFontSize);
      doc.text(`Ganado`, (doc.internal.pageSize.width - cardWidth) / 2 + sidebarWidth + cardPadding - 5, yPos + cardPadding + cardDataYOffset);
      doc.setFontSize(dataFontSize);
      doc.text(`${order.ganado[0].sexo}`, (doc.internal.pageSize.width - cardWidth) / 2 + sidebarWidth + cardPadding - 5 + 9, yPos + cardPadding + 10 + cardDataYOffset, { align: "center" });
      doc.text(`${order.ganado[0].id_raza.name}`, (doc.internal.pageSize.width - cardWidth) / 2 + sidebarWidth + cardPadding - 5 + 9, yPos + cardPadding + 20 + cardDataYOffset, { align: "center" });
      doc.text(`${order.ganado[0].color}`, (doc.internal.pageSize.width - cardWidth) / 2 + sidebarWidth + cardPadding - 5 + 9, yPos + cardPadding + 30 + cardDataYOffset, { align: "center" });
      doc.text(`${order.ganado[0].siniiga}`, (doc.internal.pageSize.width - cardWidth) / 2 + sidebarWidth + cardPadding - 5 + 9, yPos + cardPadding + 40 + cardDataYOffset, { align: "center" });
    
      doc.setFontSize(columnTitleFontSize);
      doc.text(`Comprador`, (doc.internal.pageSize.width - cardWidth) / 2 + sidebarWidth - 17 + cardWidth / 3 + cardPadding, yPos + cardPadding + cardDataYOffset);
      doc.setFontSize(dataFontSize);
      doc.text(`${order.comprador ? order.comprador.nombre : ''}`, (doc.internal.pageSize.width - cardWidth) / 2 + sidebarWidth - 17 + cardWidth / 3 + cardPadding + 13, yPos + cardPadding + 10 + cardDataYOffset, { align: "center" });
      doc.text(`${order.comprador ? order.comprador.domicilio : ''}`, (doc.internal.pageSize.width - cardWidth) / 2 + sidebarWidth - 17 + cardWidth / 3 + cardPadding + 13, yPos + cardPadding + 20 + cardDataYOffset, { align: "center" });
      doc.text(`${order.comprador ? order.comprador.municipio : ''}`, (doc.internal.pageSize.width - cardWidth) / 2 + sidebarWidth - 17 + cardWidth / 3 + cardPadding + 13, yPos + cardPadding + 30 + cardDataYOffset, { align: "center" });
      doc.text(`${order.comprador ? order.comprador.predio : ''}`, (doc.internal.pageSize.width - cardWidth) / 2 + sidebarWidth - 17 + (cardWidth / 3) + cardPadding + 13, yPos + cardPadding + 40 + cardDataYOffset, { align: "center" });

      doc.setFontSize(columnTitleFontSize);
      doc.text(`Vendedor`, (doc.internal.pageSize.width - cardWidth) / 2 + sidebarWidth - 17 + 2 * (cardWidth / 3) + cardPadding, yPos + cardPadding + cardDataYOffset);
      doc.setFontSize(dataFontSize);
      doc.text(`${order.vendedor ? order.vendedor.nombre : ''}`, (doc.internal.pageSize.width - cardWidth) / 2 + sidebarWidth - 17 + 2 * (cardWidth / 3) + cardPadding + 10, yPos + cardPadding + 10 + cardDataYOffset, { align: "center" });
      doc.text(`${order.vendedor ? order.vendedor.domicilio : ''}`, (doc.internal.pageSize.width - cardWidth) / 2 + sidebarWidth - 17 + 2 * (cardWidth / 3) + cardPadding + 10, yPos + cardPadding + 20 + cardDataYOffset, { align: "center" });
      doc.text(`${order.vendedor ? order.vendedor.municipio : ''}`, (doc.internal.pageSize.width - cardWidth) / 2 + sidebarWidth - 17 + 2 * (cardWidth / 3) + cardPadding + 10, yPos + cardPadding + 30 + cardDataYOffset, { align: "center" });
    
      doc.setFontSize(dataFontSize);
    
      const vehicleData = order.vehiculo ? `${order.vehiculo.marca} ${order.vehiculo.modelo}${order.vehiculo.placa ? ` (${order.vehiculo.placa})` : ''}` : '';
      doc.text(vehicleData, (doc.internal.pageSize.width) / 2.2 + 10, yPos + cardHeight - cardPadding);
    };        

    // Asegurar que los pedidos estén emparejados correctamente y revertir su orden
    for (let i = 0; i < orders.length; i += 2) {
      const order1 = orders[i];
      const order2 = orders[i + 1];
      addPageWithOrderData(order1, order2);
    }

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