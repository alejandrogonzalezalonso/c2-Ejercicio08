export class Personaje {
  nombre;
  familia;
  edad;
  estado = "Vivo";
  serie;
  comunicar() {
    return "";
  }
  morir() {
    this.estado = muerto;
  }
  constructor(nombre, familia, edad, estado, serie) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.estado = estado;
    this.serie = serie;
  }
}
