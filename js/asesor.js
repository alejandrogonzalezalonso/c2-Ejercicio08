import { Personaje } from "./personaje";

class Asesor extends Personaje {
  senyor;

  constructor(nombre, familia, edad, serie, senyor) {
    super(nombre, familia, edad, serie);
    this.senyor = senyor;
  }

  comunica = () => "No sé por qué, pero creo que voy a morir pronto";
}
