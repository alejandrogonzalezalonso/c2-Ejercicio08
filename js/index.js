const mensajePersonajes = (arrayPersonajes) =>
  arrayPersonajes.map((personaje) => personaje.comunica());

const seriePersonaje = (arrayPersonajes) =>
  arrayPersonajes.map(
    (personaje) =>
      `${personaje.nombre} pertenece a la serie: ${personaje.serie}`
  );

const main = () => {};
