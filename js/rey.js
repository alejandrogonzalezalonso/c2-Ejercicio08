import { Personaje } from "./personaje.js";

export default class Rey extends Personaje {
  anyosReinado;

  constructor(nombre, familia, edad, serie = "Juego de Tronos", anyosReinado) {
    super(nombre, familia, edad, serie);
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.anyosReinado = anyosReinado;
  }

  comunicar = () => "Vais a morir todos";
}
