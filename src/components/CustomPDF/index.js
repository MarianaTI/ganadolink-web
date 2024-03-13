import { jsPDF } from "jspdf";

export const generatePDF = (order) => {
  const doc = new jsPDF();
  const titleFontSize = 15;
  const dataFontSize = 12;
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

  const fecha = new Date().toLocaleDateString();
  const folio = "123456";
  const fechaX = 158; // Ajustado para alinear con el logo
  const fechaY = 50; // Posición debajo del logo
  doc.text(`Fecha: ${fecha}`, fechaX, fechaY);
  doc.text(`Folio: ${folio}`, fechaX, fechaY + 10); // Ajustado debajo de la fecha

  let yPos = 70; // Ajustado para que los datos comiencen más abajo

  // Datos específicos de la fila seleccionada
  doc.setFontSize(dataFontSize);
  doc.text(`_id: ${order._id}`, 20, yPos);
  yPos += 10;
  doc.text(`Especie: ${order.id_especie ? order.id_especie.name : ""}`, 20, yPos);
  yPos += 10;
  doc.text(`Motivo: ${order.id_motivo ? order.id_motivo.name : ""}`, 20, yPos);
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

  // Mostrar los datos anidados del ganado
  if (Array.isArray(order.ganado) && order.ganado.length > 0) {
    order.ganado.forEach((ganado, index) => {
      doc.text(`Ganado ${index + 1}: ${ganado.siniiga}`, 20, yPos);
      yPos += 10;
    });
  }

  // Mostrar los datos del vehículo si están definidos
  if (order.vehiculo) {
    let vehiculoText = `Vehículo: ${order.vehiculo.marca} ${order.vehiculo.modelo}`;
    if (order.vehiculo.placa) vehiculoText += ` (${order.vehiculo.placa})`;
    doc.text(vehiculoText, 20, yPos);
    yPos += 10;
  }

  // Guardar y descargar el PDF
  doc.save("fila_seleccionada.pdf");
};