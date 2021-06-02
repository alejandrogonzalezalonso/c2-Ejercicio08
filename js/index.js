import Escudero from "./escudero.js";
import Asesor from "./asesor.js";
import Luchador from "./luchador.js";
import Rey from "./rey.js";

const mensajePersonajes = (arrayPersonajes) =>
  arrayPersonajes.map((personaje) => personaje.comunica());

const seriePersonaje = (arrayPersonajes) =>
  arrayPersonajes.map(
    (personaje) =>
      `${personaje.nombre} pertenece a la serie: ${personaje.serie}`
  );

const creaPersonajes = () => {
  const personajes = [];
  personajes.push(
    new Rey("Joffrey Baratheon", "Baratheon", 55, "Juego de Tronos", 21)
  );
  personajes.push(
    new Luchador("Jaime Lannister", "Lannister", 38, "Juego de tronos", 8)
  );
  personajes.push(
    new Luchador("Daenerys Targaryen", "Targaryen", 18, "Juego de tronos", 2)
  );
  personajes.push(
    new Asesor(
      "Tyrion Lannister",
      "Lannister",
      38,
      "Juego de tronos",
      "Daenerys Targaryen"
    )
  );
  personajes.push(
    new Escudero(
      "Jaime Lannister",
      "Lannister",
      38,
      "Juego de tronos",
      "Jaime Lannister"
    )
  );

  return personajes;
};
const main = () => {
  const personajesGOT = creaPersonajes();
};

main();
