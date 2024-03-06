import { useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { DownloadPdfButton } from "@/styles/catalogue.style";
import { FaFilePdf } from "react-icons/fa";

const DownloadAllPDF = ({ orders }) => {
  const [isLoading, setIsLoading] = useState(false);

  const generatePDF = () => {
    setIsLoading(true);

    const doc = new jsPDF();
    const titleFontSize = 20;
    const titleLineHeight = 10;
    const titleFirstLine = "Dirección general de ganadería y acuacultura";
    const titleSecondLine = "Guía de tránsito";
    const titleThirdLine = "de ganados, productos y subproductos";

    const addPageWithOrderData = (order, index) => {
      if (index > 0) {
        doc.addPage(); // Agregar una nueva página para cada orden, excepto la primera
      }

      const centerX = (doc.internal.pageSize.width - Math.max(
        doc.getStringUnitWidth(titleFirstLine) * titleFontSize / doc.internal.scaleFactor,
        doc.getStringUnitWidth(titleSecondLine) * titleFontSize / doc.internal.scaleFactor,
        doc.getStringUnitWidth(titleThirdLine) * titleFontSize / doc.internal.scaleFactor
      )) / 2;

      doc.setFontSize(titleFontSize);
      doc.text(titleFirstLine, centerX, 17, { align: "justify" });
      doc.text(titleSecondLine, centerX, 17 + titleLineHeight, { align: "justify" });
      doc.text(titleThirdLine, centerX, 17 + titleLineHeight * 2, { align: "justify" });

      const titleBottomMargin = 15 + titleLineHeight * 3;

      const logoWidth = 16; 
      const logoHeight = 16; 
      const logoX = 20; 
      const logoY = titleBottomMargin + 10; 
      const empresaNombre = "Ganado Link"; 
      const nombreX = logoX + logoWidth / 2; 
      const nombreY = logoY + logoHeight + 5; 
      doc.addImage('/img/Logo.png', 'PNG', logoX, logoY, logoWidth, logoHeight);
      doc.text(empresaNombre, nombreX, nombreY, { align: "center" });

      const fecha = new Date().toLocaleDateString();
      const folio = "123456"; 
      const fechaX = doc.internal.pageSize.width - 60; 
      const fechaY = logoY + 10; 
      doc.text(`Fecha: ${fecha}`, fechaX, fechaY);
      doc.text(`Folio: ${folio}`, fechaX, fechaY + 10);

      let yPos = titleBottomMargin + 50; 
      doc.setFontSize(12);
      doc.text(`_id: ${order._id}`, 20, yPos);
      yPos += 10;
      doc.text(`Especie: ${order.id_especie ? order.id_especie.name : ""}`, 20, yPos);
      yPos += 10;
      doc.text(`Motivo: ${order.id_motivo ? order.id_motivo.name : ""}`, 20, yPos);
      yPos += 10;

      if (order.vendedor && order.vendedor.nombre) {
        let vendedorText = `Vendedor: ${order.vendedor.nombre}`;
        if (order.vendedor.direccion)
          vendedorText += `, ${order.vendedor.direccion}`;
        if (order.vendedor.ciudad) vendedorText += `, ${order.vendedor.ciudad}`;
        if (order.vendedor.estado) vendedorText += `, ${order.vendedor.estado}`;
        doc.text(vendedorText, 20, yPos);
        yPos += 10;
      }

      if (order.comprador && order.comprador.nombre) {
        let compradorText = `Comprador: ${order.comprador.nombre}`;
        if (order.comprador.direccion)
          compradorText += `, ${order.comprador.direccion}`;
        if (order.comprador.ciudad)
          compradorText += `, ${order.comprador.ciudad}`;
        if (order.comprador.estado)
          compradorText += `, ${order.comprador.estado}`;
        if (order.comprador.otros) compradorText += `, ${order.comprador.otros}`;
        doc.text(compradorText, 20, yPos);
        yPos += 10;
      }

      if (Array.isArray(order.ganado) && order.ganado.length > 0) {
        order.ganado.forEach((ganado, index) => {
          doc.text(`Ganado ${index + 1}: ${ganado.siniiga}`, 20, yPos);
          yPos += 10;
        });
      }

      if (order.vehiculo) {
        let vehiculoText = `Vehículo: ${order.vehiculo.marca} ${order.vehiculo.modelo}`;
        if (order.vehiculo.placa) vehiculoText += ` (${order.vehiculo.placa})`;
        doc.text(vehiculoText, 20, yPos);
        yPos += 10;
      }

      doc.text(`Página ${index + 1}`, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - 10, { align: "center" });
    };

    orders.forEach((order, index) => {
      addPageWithOrderData(order, index);
    });

    doc.save("catalogo.pdf");
    setIsLoading(false);
  };

  return (
    <div>
      <DownloadPdfButton onClick={generatePDF} disabled={isLoading}>
        {isLoading ? "Descargando..." : "Descargar PDF"}
        <FaFilePdf style={{ marginLeft: "5px" }} />
      </DownloadPdfButton>
    </div>
  );
};

export default DownloadAllPDF;