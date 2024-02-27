import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Salsa',
    padding: '40px',
  },
  logo: {
    width: '200px',
    marginBottom: '20px',
  },
  companyName: {
    fontSize: '20px',
    marginBottom: '20px',
  },
  dataContainer: {
    marginBottom: '40px',
  },
  dataItem: {
    marginBottom: '10px',
  },
  horseshoeImage: {
    marginTop: '40px',
    width: '200px',
  },
});

const CatalogPDF = ({ item }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image src="..\public\img\Logo.png" style={styles.logo} />
      <Text style={styles.companyName}>Ganado Link</Text>
      <View style={styles.dataContainer}>
        <Text style={styles.dataItem}>Número de animal: {item.numero_animal}</Text>
        <Text style={styles.dataItem}>Patente o factura: {item.patente_factura}</Text>
        <Text style={styles.dataItem}>Sexo: {item.sexo}</Text>
        <Text style={styles.dataItem}>Color: {item.color}</Text>
        <Text style={styles.dataItem}>Raza: {item.raza}</Text>
        <Text style={styles.dataItem}>Arete siniiga: {item.arete_siniiga}</Text>
      </View>
      <Image src={`/img/${item.figura_herraje}.jpg`} style={styles.horseshoeImage} />
    </Page>
  </Document>
);

export default CatalogPDF;