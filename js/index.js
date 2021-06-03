import Escudero from "./escudero.js";
import Asesor from "./asesor.js";
import Luchador from "./luchador.js";
import Rey from "./rey.js";

const seriesConstantes = {
  juegoDeTronos: "Juego de Tronos",
};

const mensajePersonajes = (arrayPersonajes) =>
  arrayPersonajes.map((personaje) => personaje.comunicar());

const seriePersonaje = (arrayPersonajes) => [
  ...new Set(arrayPersonajes.map((personaje) => personaje.serie)),
];

const creaPersonajes = () => {
  const personajes = [];
  personajes.push(
    new Rey(
      "Joffrey Baratheon",
      "Baratheon",
      55,
      seriesConstantes.juegoDeTronos,
      21
    )
  );
  personajes.push(
    new Luchador(
      "Jaime Lannister",
      "Lannister",
      38,
      seriesConstantes.juegoDeTronos,
      8
    )
  );
  personajes.push(
    new Luchador(
      "Daenerys Targaryen",
      "Targaryen",
      18,
      seriesConstantes.juegoDeTronos,
      2
    )
  );
  personajes.push(
    new Asesor(
      "Tyrion Lannister",
      "Lannister",
      38,
      seriesConstantes.juegoDeTronos,
      "Daenerys Targaryen"
    )
  );
  personajes.push(
    new Escudero(
      "Jaime Lannister",
      "Lannister",
      38,
      seriesConstantes.juegoDeTronos,
      "Jaime Lannister"
    )
  );

  return personajes;
};
const main = () => {
  const personajesGOT = creaPersonajes();
  console.log(personajesGOT);

  console.log(seriePersonaje(personajesGOT));

  for (const mensaje of mensajePersonajes(personajesGOT)) {
    console.log(mensaje);
  }
};

const personajesEdad = (personajes) => {
  const personajesOrdenados = [...personajes];
  return personajesOrdenados.sort(
    (
      { personajes: { edad: edadMayor } },
      { personajes: { edad: edadMenor } }
    ) => edadMayor - edadMenor
  );
};
main();
