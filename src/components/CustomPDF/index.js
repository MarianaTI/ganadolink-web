import { jsPDF } from "jspdf";

export const generatePDF = (order) => {
  const doc = new jsPDF();
  const titleFontSize = 20;
  const titleLineHeight = 10;
  const titleFirstLine = "Dirección general de ganadería y acuacultura";
  const titleSecondLine = "Guía de tránsito";
  const titleThirdLine = "de ganados, productos y subproductos";

  // Calcular la posición x para centrar los títulos
  const titleFirstLineWidth = doc.getStringUnitWidth(titleFirstLine) * titleFontSize / doc.internal.scaleFactor;
  const titleSecondLineWidth = doc.getStringUnitWidth(titleSecondLine) * titleFontSize / doc.internal.scaleFactor;
  const titleThirdLineWidth = doc.getStringUnitWidth(titleThirdLine) * titleFontSize / doc.internal.scaleFactor;
  const centerX = (doc.internal.pageSize.width - Math.max(titleFirstLineWidth, titleSecondLineWidth, titleThirdLineWidth)) / 2;

  // Agregar las tres líneas de título al PDF
  doc.setFontSize(titleFontSize);
  doc.text(titleFirstLine, centerX, 17, { align: "justify" });
  doc.text(titleSecondLine, centerX, 17 + titleLineHeight, { align: "justify" });
  doc.text(titleThirdLine, centerX, 17 + titleLineHeight * 2, { align: "justify" });

  // Agregar espacios entre los títulos y los siguientes elementos
  const titleBottomMargin = 15 + titleLineHeight * 3;

  // Agregar el logo de la empresa y el nombre
  const logoWidth = 16; // Ancho del logo
  const logoHeight = 16; // Altura del logo
  const logoX = 20; // Posición X del logo
  const logoY = titleBottomMargin + 10; // Posición Y del logo
  const empresaNombre = "Ganado Link"; // Nombre de la empresa
  const nombreX = logoX + logoWidth / 2; // Centrar el nombre debajo del logo
  const nombreY = logoY + logoHeight + 5; // Ajustar la posición vertical
  doc.addImage('/img/Logo.png', 'PNG', logoX, logoY, logoWidth, logoHeight);
  doc.text(empresaNombre, nombreX, nombreY, { align: "center" });

  // Agregar la fecha y el número de folio
  const fecha = new Date().toLocaleDateString();
  const folio = "123456"; // Número de folio
  const fechaX = doc.internal.pageSize.width - 60; // Posición X de la fecha
  const fechaY = logoY + 10; // Posición Y de la fecha
  doc.text(`Fecha: ${fecha}`, fechaX, fechaY);
  doc.text(`Folio: ${folio}`, fechaX, fechaY + 10);

  // Convertir las ID de especie y motivo en texto legible
  const especie = order.id_especie ? order.id_especie.name : "";
  const motivo = order.id_motivo ? order.id_motivo.name : "";

  // Mostrar los datos de la fila en forma de lista en el PDF
  let yPos = titleBottomMargin + 50; // Posición inicial después del título
  doc.setFontSize(12);
  doc.text(`_id: ${order._id}`, 20, yPos);
  yPos += 10;
  doc.text(`Especie: ${especie}`, 20, yPos);
  yPos += 10;
  doc.text(`Motivo: ${motivo}`, 20, yPos);
  yPos += 10;

  // Mostrar los datos específicos del vendedor si están definidos
  if (order.vendedor && order.vendedor.nombre) {
    let vendedorText = `Vendedor: ${order.vendedor.nombre}`;
    if (order.vendedor.direccion)
      vendedorText += `, ${order.vendedor.direccion}`;
    if (order.vendedor.ciudad) vendedorText += `, ${order.vendedor.ciudad}`;
    if (order.vendedor.estado) vendedorText += `, ${order.vendedor.estado}`;
    doc.text(vendedorText, 20, yPos);
    yPos += 10;
  }

  // Mostrar los datos específicos del comprador si están definidos
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

  // Mostrar los datos anidados de ganado
  if (Array.isArray(order.ganado) && order.ganado.length > 0) {
    order.ganado.forEach((ganado, index) => {
      doc.text(`Ganado ${index + 1}: ${ganado.siniiga}`, 20, yPos);
      yPos += 10;
    });
  }

  // Mostrar los datos del vehículo si están definidos
  if (order.vehiculo) {
    let vehiculoText = `Vehículo: ${order.vehiculo.marca} ${
      order.vehiculo.modelo
    }`;
    if (order.vehiculo.placa) vehiculoText += ` (${order.vehiculo.placa})`;
    doc.text(vehiculoText, 20, yPos);
    yPos += 10;
  }

  // Guardar y descargar el PDF
  doc.save("fila_seleccionada.pdf");
};