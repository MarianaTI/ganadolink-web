import { jsPDF } from "jspdf";

export const generatePDF = (order) => {
  const doc = new jsPDF();
  const titleFontSize = 15;
  const dataFontSize = 12;
  const columnTitleFontSize = 14;
  const titleFirstLine = "DIRECCIÓN GENERAL DE GANADERÍA Y ACUACULTURA";
  const titleSecondLine = "GUÍA DE TRÁNSITO";
  const titleThirdLine = "DE GANADOS, PRODUCTOS Y SUBPRODUCTOS";

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

  // Fecha y folio
  const fecha = new Date().toLocaleDateString();
  const folio = "123456";
  const fechaX = 157; // Ajustado para alinear con el logo
  const fechaY = 50; // Posición debajo del logo
  doc.text(`Fecha: ${fecha}`, fechaX, fechaY);
  doc.text(`Folio: ${folio}`, fechaX, fechaY + 10); // Ajustado debajo de la fecha

  // Datos específicos de la fila seleccionada
  doc.setFontSize(dataFontSize);

  // Tarjeta de datos
  const cardWidth = doc.internal.pageSize.width * 0.9; // 90% del ancho de la página
  const cardHeight = 120; // Ajustado para dar espacio para los datos
  const cardX = (doc.internal.pageSize.width - cardWidth) / 2;
  const cardY = 85; // Ajustado para que el card esté más abajo
  const columnWidth = cardWidth / 3; // Ancho de cada columna
  const borderRadius = 3;

  // Dibujar bordes de la tarjeta
  doc.setLineWidth(0.3); // Grosor del borde
  doc.setDrawColor(0); // Color del borde (negro)
  doc.setFillColor(255); // Color de fondo (blanco)
  doc.roundedRect(cardX, cardY, cardWidth, cardHeight, borderRadius, borderRadius, "FD");

  // Títulos de las columnas
  doc.setFontSize(columnTitleFontSize);
  doc.text("Ganado:", cardX + 5, cardY + 15);
  doc.text("Comprador:", cardX + columnWidth + 5, cardY + 15);
  doc.text("Vendedor:", cardX + 2 * columnWidth + 5, cardY + 15);

  // Datos de ganado
  if (Array.isArray(order.ganado) && order.ganado.length > 0) {
    doc.setFontSize(dataFontSize);
    doc.text(`${order.ganado[0].siniiga}`, cardX + 5, cardY + 30);
  }

  // Datos de comprador
  if (order.comprador && order.comprador.nombre) {
    let compradorText = `${order.comprador.nombre}`;
    if (order.comprador.direccion)
      compradorText += `, ${order.comprador.direccion}`;
    if (order.comprador.ciudad)
      compradorText += `, ${order.comprador.ciudad}`;
    if (order.comprador.estado)
      compradorText += `, ${order.comprador.estado}`;
    if (order.comprador.otros) compradorText += `, ${order.comprador.otros}`;
    doc.text(compradorText, cardX + columnWidth + 5, cardY + 30);
  }

  // Datos de vendedor
  if (order.vendedor && order.vendedor.nombre) {
    let vendedorText = `${order.vendedor.nombre}`;
    if (order.vendedor.direccion)
      vendedorText += `, ${order.vendedor.direccion}`;
    if (order.vendedor.ciudad) vendedorText += `, ${order.vendedor.ciudad}`;
    if (order.vendedor.estado) vendedorText += `, ${order.vendedor.estado}`;
    doc.text(vendedorText, cardX + 2 * columnWidth + 5, cardY + 30);
  }

  // Guardar y descargar el PDF
  doc.save("fila_seleccionada.pdf");
};