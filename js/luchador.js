import { Personaje } from "./personaje.js";

class Luchador extends Personaje {
  destreza;

  constructor(nombre, familia, edad, destreza) {
    super();
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    if (destreza < 1) {
      this.destreza = 1;
    } else if (destreza > 10) {
      this.destreza = 10;
    } else {
      this.destreza = destreza;
    }
  }

  comunicar = () => "Primero pego luego pregunto";
}
