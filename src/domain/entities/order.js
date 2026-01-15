class Order {
  constructor(
    _id,
    id_especie,
    id_motivo,
    id_user,
    vendedor,
    comprador,
    ganado,
    vehiculo
  ) {
    this._id = _id;
    // Verifica si id_especie es un objeto y tiene propiedades _id y name.
    this.id_especie =
      id_especie && id_especie._id && id_especie.name
        ? new Especie(id_especie._id, id_especie.name)
        : new Especie(null, "");
    // Verifica si id_motivo es un objeto y tiene propiedades _id y name.
    this.id_motivo =
      id_motivo && id_motivo._id && id_motivo.name
        ? new Motivo(id_motivo._id, id_motivo.name)
        : new Motivo(null, "");
    this.id_user = id_user;
    this.vendedor = new Vendedor(
      vendedor.nombre,
      vendedor.domicilio,
      vendedor.municipio
    );
    this.comprador = new Comprador(
      comprador.nombre,
      comprador.domicilio,
      comprador.municipio,
      comprador.predio
    );
    // Procesa cada animal en el array ganado.
    this.ganado = ganado.map((animal) => {
      // Verifica si animal.id_raza es un objeto con _id y name.
      const raza =
        animal.id_raza && animal.id_raza._id && animal.id_raza.name
          ? new Raza(animal.id_raza._id, animal.id_raza.name)
          : new Raza(null, "");
      return new Ganado(
        animal.patente,
        animal.sexo,
        raza,
        animal.color,
        animal.siniiga
      );
    });
    this.vehiculo = new Vehiculo(
      vehiculo.tipo,
      vehiculo.marca,
      vehiculo.modelo,
      vehiculo.placa,
      vehiculo.color,
      vehiculo.nombre_operador_vehiculo
    );
  }
}

class Especie {
  constructor(_id, name) {
    this._id = _id;
    this.name = name;
  }
}

class Raza {
  constructor(_id, name) {
    this._id = _id;
    this.name = name;
  }
}

class Motivo {
  constructor(_id, name) {
    this._id = _id;
    this.name = name;
  }
}

class Vendedor {
  constructor(nombre, domicilio, municipio) {
    this.nombre = nombre;
    this.domicilio = domicilio;
    this.municipio = municipio;
  }
}

class Comprador {
  constructor(nombre, domicilio, municipio, predio) {
    this.nombre = nombre;
    this.domicilio = domicilio;
    this.municipio = municipio;
    this.predio = predio;
  }
}

class Ganado {
  constructor(patente, sexo, id_raza, color, siniiga) {
    this.patente = patente;
    this.sexo = sexo;
    this.id_raza = id_raza;
    this.color = color;
    this.siniiga = siniiga;
  }
}

class Vehiculo {
  constructor(tipo, marca, modelo, placa, color, nombre_operador_vehiculo) {
    this.tipo = tipo;
    this.marca = marca;
    this.modelo = modelo;
    this.placa = placa;
    this.color = color;
    this.nombre_operador_vehiculo = nombre_operador_vehiculo;
  }
}

export default Order;
