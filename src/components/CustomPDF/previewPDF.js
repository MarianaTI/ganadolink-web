import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Icon, PDFButton } from "@/styles/catalogue.style";

const CombinedPDF = ({ orders }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const margin = 10;
    const titleFontSize = 10;
    const dataFontSize = 12;
    const columnTitleFontSize = 10;
    const signatureTitleFontSize = 12;
    const signatureNameFontSize = 9;

    // Logo en la esquina superior izquierda
    const logoWidth = 32;
    const logoHeight = 8;
    const logoX = margin;
    const logoY = 12;
    doc.addImage("/img/ganadolink-icon.png", "PNG", logoX, logoY, logoWidth, logoHeight);

    // Títulos
    doc.setFontSize(titleFontSize);
    doc.setFont("helvetica", "bold");
    doc.text("DIRECCIÓN GENERAL DE GANADERÍA Y ACUACULTURA", pageWidth / 2, 17, {
      align: "left",
    });
    doc.text("GUÍA DE TRÁNSITO DE GANADO", pageWidth / 2, 22, {
      align: "left",
    });

    // Fecha y Folio
    const fecha = new Date().toLocaleDateString();
    const folio = "123456";
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(242, 125, 16);
    doc.text(`Fecha: ${fecha}`, margin, 35);
    doc.text(`Folio: ${folio}`, pageWidth - margin, 35, { align: "right" });

    // Datos del vendedor y comprador (Usando el primer "order" como ejemplo)
    const vendedor = {
      nombre: orders[0]?.vendedor?.nombre || "Vendedor Desconocido",
      direccion: orders[0]?.vendedor?.direccion || "Sin dirección",
    };

    const comprador = {
      nombre: orders[0]?.comprador?.nombre || "Comprador Desconocido",
      direccion: orders[0]?.comprador?.direccion || "Sin dirección",
    };

    let yPos = 60;

    doc.setFontSize(columnTitleFontSize);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(64, 64, 64);
    doc.text("Datos del vendedor", margin, yPos);
    doc.text("Datos del comprador", pageWidth / 2 + margin, yPos);

    yPos += 10;
    doc.setFontSize(dataFontSize);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.text(vendedor.nombre, margin, yPos);
    doc.text(comprador.nombre, pageWidth / 2 + margin, yPos);

    yPos += 10;
    doc.setTextColor(64, 64, 64);
    const vendedorDireccion = doc.splitTextToSize(vendedor.direccion, pageWidth / 2 - margin);
    const compradorDireccion = doc.splitTextToSize(comprador.direccion, pageWidth / 2 - margin);
    vendedorDireccion.forEach((line, index) => {
      doc.setFont("helvetica", "normal");
      doc.text(line, margin, yPos + index * 5);
    });
    compradorDireccion.forEach((line, index) => {
      doc.text(line, pageWidth / 2 + margin, yPos + index * 5);
    });

    yPos += Math.max(vendedorDireccion.length, compradorDireccion.length) * 5;

    // Espacio para ganado
    yPos += 30;
    doc.setFontSize(columnTitleFontSize);
    doc.setFont("helvetica", "bold");
    doc.text("Datos del ganado", margin, yPos);

    yPos += 10;

    // Tabla de datos del ganado
    orders.forEach((order, orderIndex) => {
      doc.autoTable({
        startY: yPos,
        head: [["#", "Arete SINIIGA", "Comprador", "Vendedor"]],
        body: order.ganado.map((g, ganadoIndex) => [
          ganadoIndex + 1,
          g.siniiga,
          order.comprador?.nombre || "Desconocido",
          order.vendedor?.nombre || "Desconocido",
        ]),
        styles: { fontSize: dataFontSize },
        headStyles: { fillColor: [242, 125, 16] },
      });
      yPos = doc.previousAutoTable.finalY + 20;
    });

    // Datos del vehículo
    const vehiculo = {
      conductor: "Cloe Trujillo Islas",
      descripcion: "Camioneta marca Chevrolet modelo 1978 con placa FRW1W23 Remolque color negro con placa SDJUEJ2D",
    };

    doc.setFontSize(columnTitleFontSize);
    doc.setFont("helvetica", "normal");
    doc.text("Datos del vehículo", margin, yPos);

    yPos += 15;
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(dataFontSize);
    doc.setFont("helvetica", "bold");
    doc.text(vehiculo.conductor, margin, yPos);

    yPos += 8;
    const vehiculoDescripcion = doc.splitTextToSize(vehiculo.descripcion, pageWidth - 8 * margin);
    vehiculoDescripcion.forEach((line, index) => {
      doc.setTextColor(64, 64, 64);
      doc.setFont("helvetica", "normal");
      doc.text(line, margin, yPos + index * 5);
    });

    // Firma
    yPos += vehiculoDescripcion.length * 5 + 30;
    doc.setFontSize(signatureTitleFontSize);
    doc.setFont("helvetica", "normal");
    doc.text("Nombre, sello y firma", pageWidth / 2, yPos, { align: "left" });

    doc.save("catalogo.pdf");
  };

  return (
    <div>
      <PDFButton type="button" onClick={generatePDF}>
        <Icon icon={faDownload} />
        <span>Descargar PDF</span>
      </PDFButton>
    </div>
  );
};

export default CombinedPDF;
