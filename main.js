//Bienvenida a participantes de un juego

alert("Estan listos para jugar??");

let participantesTotales = "";
const cantidadDeJugadores = parseInt(prompt("Cuantos participantes juegan?: "));
for (let i = 0; i < cantidadDeJugadores; i++) {
  const participante = prompt(
    "Por favor, introduzca de uno en uno los nombres de los participantes."
  );
  if (participantesTotales !== "")
    participantesTotales += i + 1 === cantidadDeJugadores ? " y " : ", ";

  participantesTotales += participante;
}

alert(`Bienvenidos ${participantesTotales}!! `);
