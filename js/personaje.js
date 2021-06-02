// eslint-disable-next-line import/prefer-default-export
export class Personaje {
  nombre;
  familia;
  edad;
  serie;
  estado = "Vivo";

  comunicar() {
    return "";
  }

  morir() {
    this.estado = "muerto";
  }

  constructor(nombre, familia, edad, serie, estado = "Vivo") {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.estado = estado;
    this.serie = serie;
  }
}
