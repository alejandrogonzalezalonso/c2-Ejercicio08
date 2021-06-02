import { Personaje } from "./personaje.js";

export default class Asesor extends Personaje {
  senyor;

  constructor(nombre, familia, edad, serie = "Juego de tronos", senyor) {
    super(nombre, familia, edad, serie);
    this.senyor = senyor;
  }

  comunica = () => "No sé por qué, pero creo que voy a morir pronto";
}
