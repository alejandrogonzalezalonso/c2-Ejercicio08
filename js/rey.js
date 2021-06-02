import { Personaje } from "./personaje.js";

class Rey extends Personaje {
  anyosReinado;

  constructor(nombre, familia, edad, anyosReinado) {
    super();
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.anyosReinado = anyosReinado;
  }

  comunicar = () => "Vais a morir todos";
}
