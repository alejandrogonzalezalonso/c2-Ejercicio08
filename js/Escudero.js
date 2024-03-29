import { Personaje } from "./personaje.js";

export default class Escudero extends Personaje {
  senyor;

  pelotismo;

  constructor(nombre, familia, edad, serie, senyor, pelotismo) {
    super(nombre, familia, edad, serie);
    this.senyor = senyor;
    if (pelotismo < 1) {
      this.pelotismo = 1;
    } else if (pelotismo > 10) {
      this.pelotismo = 10;
    } else {
      this.pelotismo = pelotismo;
    }
  }

  comunicar = () => "Soy un loser";
}
