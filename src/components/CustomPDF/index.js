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
  const logoY = 56;
  doc.addImage('/img/Logo.png', 'PNG', logoX, logoY, logoWidth, logoHeight);

  // Títulos
  doc.setFontSize(titleFontSize);
  doc.text(titleFirstLine, doc.internal.pageSize.width / 2, 17, { align: "center" });
  doc.text(titleSecondLine, doc.internal.pageSize.width / 2, 27, { align: "center" });
  doc.text(titleThirdLine, doc.internal.pageSize.width / 2, 37, { align: "center" });

  // Fecha y folio
  const fecha = new Date().toLocaleDateString();
  const folio = "123456";
  const fechaX = 158; // Ajustado para alinear con el logo
  const fechaY = 67; // Posición debajo del logo
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

  // Dibujar rectángulo como sidebar
  const sidebarWidth = 30; // Ancho del sidebar
  const sidebarX = cardX; // Posición X del sidebar es igual a la posición X del card
  doc.setLineWidth(0.3); // Grosor del borde del sidebar igual al del card
  doc.setDrawColor(0); // Color del borde (negro) del sidebar igual al del card
  doc.setFillColor(200); // Color del relleno del sidebar igual al del card
  doc.roundedRect(sidebarX, cardY, sidebarWidth, cardHeight, borderRadius, borderRadius, "FD");

  // Título dentro del sidebar (Arete Siniiga)
  doc.setTextColor(0); // Color del texto (blanco)
  doc.setFontSize(columnTitleFontSize);
  const areteTitleX = sidebarX + sidebarWidth / 6; // Centrado horizontalmente
  doc.text("ARETE", areteTitleX, cardY + 15, { align: "justify" });
  doc.text("SINIIGA", areteTitleX, cardY + 23, { align: "justify" });

  // Datos de Arete Siniiga
  if (Array.isArray(order.ganado) && order.ganado.length > 0) {
    doc.setFontSize(columnTitleFontSize);
    doc.text(`${order.ganado[0].siniiga}`, areteTitleX, cardY + 35, { align: "justify" });
  }

  // Títulos de las columnas
  doc.setTextColor(0); // Restaurar el color del texto a negro
  doc.setFontSize(columnTitleFontSize);
  doc.text("Ganado", cardX + sidebarWidth + 5, cardY + 7);
  // Mover la columna del comprador un poco a la izquierda
  doc.text("Comprador", cardX + sidebarWidth + columnWidth + -6, cardY + 7);
  doc.text("Vendedor", cardX + sidebarWidth + 1.8 * columnWidth + 5, cardY + 7);

  // Datos de ganado
  doc.setFontSize(dataFontSize);
  doc.text(`${order.ganado[0].sexo || ''}`, cardX + sidebarWidth + 5, cardY + 17);
  doc.text(`${order.ganado[0].id_raza.name || ''}`, cardX + sidebarWidth + 5, cardY + 31.5);
  doc.text(`${order.ganado[0].color || ''}`, cardX + sidebarWidth + 5, cardY + 45.5);
  doc.text(`${order.ganado[0].siniiga || ''}`, cardX + sidebarWidth + 5, cardY + 60.6);

  // Datos de comprador
  const compradorText = [
    `${order.comprador ? order.comprador.nombre : ''}`,
    `${order.comprador ? order.comprador.domicilio : ''}`,
    `${order.comprador ? order.comprador.municipio : ''}`,
    `${order.comprador ? order.comprador.predio : ''}`
  ].join('\n\n\n'); // Agregar dos espacios adicionales entre líneas
  doc.text(compradorText, cardX + sidebarWidth + columnWidth + -6, cardY + 17);

  // Datos de vendedor
  const vendedorText = [
    `${order.vendedor ? order.vendedor.nombre : ''}`,
    `${order.vendedor ? order.vendedor.domicilio : ''}`,
    `${order.vendedor ? order.vendedor.municipio : ''}`,
  ].join('\n\n\n'); // Agregar dos espacios adicionales entre líneas
  doc.text(vendedorText, cardX + sidebarWidth + 1.8 * columnWidth + 5, cardY + 17);

  // Datos del vehículo centrados debajo de las columnas
  const vehicleData = order.vehiculo ? `${order.vehiculo.marca} ${order.vehiculo.modelo}${order.vehiculo.placa ? ` (${order.vehiculo.placa})` : ''}` : '';
  doc.text(vehicleData, (doc.internal.pageSize.width) / 1.8, cardY + cardHeight - 15, { align: "center" });

  // Firma digital
  const firmaX = cardX + 10; // Ajustar posición a la izquierda del card
  const firmaY = cardY + cardHeight + 20; // Posición debajo del card
  doc.setFontSize(17);
  doc.setFont("arial", "bold"); // Cambiar la fuente a negrita y cursiva
  doc.text("Firma Digital:", firmaX, firmaY, { align: "left" }); // Ajustar alineación a la izquierda
  doc.setFont("times", "italic"); // Cambiar la fuente a cursiva
  doc.setFontSize(33); // Aumentar tamaño de la firma
  doc.text("Ganado Link | Corps.", firmaX, firmaY + 15, { align: "left" }); // Ajustar alineación a la izquierda y posición vertical
  // Agregar línea para simular la firma
  doc.setFontSize(12);
  doc.text("__________________________", firmaX, firmaY + 30, { align: "left" });
  // Agregar texto del equipo
  doc.setFontSize(10);
  doc.setFont("Helvetica", "normal");
  doc.text("Equipo #4 Master Mind", firmaX, firmaY + 35, { align: "left" });

  // Paginación
  const pageCount = doc.internal.getNumberOfPages();
  // Configurar el estilo de la paginación
  const paginationX = doc.internal.pageSize.width / 2;
  const paginationY = doc.internal.pageSize.height - 10;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(200);
  doc.text(`Página ${doc.internal.getNumberOfPages()}`, paginationX, paginationY, { align: "center" });

  // Guardar y descargar el PDF
  doc.save("fila_seleccionada.pdf");
};