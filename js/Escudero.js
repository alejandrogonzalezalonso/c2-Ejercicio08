class Escudero {
  senyor;

  constructor(nombre, familia, edad, serie, senyor) {
    super(nombre, familia, edad, serie);
    this.senyor = senyor;
  }

  comunica = () => "No sé por qué, pero creo que voy a morir pronto";
}
