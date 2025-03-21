// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Cielo y estrellas", time: 16 },
  { text: "Brillan a mi alrededor", time: 16.2 },
  { text: "Como un rayo de sol", time: 20 },
  { text: "Cuando tu me piensas", time:21 },
  { text: "Y yo te pienso", time: 24 },
  { text: "Se acelera", time: 26 },
  { text: "Todo este momento baby", time: 28 },
  { text: "Dime que me acompañaras", time: 31 },
  { text: "A cruzar esta eternidad", time: 33 },
  { text: "Miles de esos astros caerán", time: 35 },
  { text: "Sobre el desierto", time: 37 },
  { text: "Lejos llegarás junto a mi", time: 39 },
  { text: "Déjame que te lo haga sentir", time: 41 },
  { text: "Nuestra historia quedará", time: 43 },
  { text: "En el firmamento", time: 45 },
  { text: "Ya verás", time: 48 },
  { text: "Déjate llevar", time: 50 },
  { text: "Las luces guiarán", time: 52 },
  { text: "En esta inmensidad", time: 54 },
  { text: "Ya verás", time: 56 },
  { text: "Déjate llevar", time: 58 },
  { text: "Las luces guiarán", time: 60 },
  { text: "En esta inmensidad", time: 63 },
  { text: "Ya no me interesa", time: 66 },
  { text: "Qué dirán", time: 68 },
  { text: "Que imaginaran", time: 70 },
  { text: "Navego en la esperanza", time: 72 },
  { text: "La luz me guía más allá", time: 75 },
  { text: "De esta soledad", time: 78 },
  { text: "Cuando tu voz me abraza", time:80 },
  { text: "En el latir de tu voz", time:86 },
  { text: "Se encuentra el fervor", time: 87 },
  { text: "Que enciende mi amor", time: 89 },
  { text: "Y recorre galaxias repletas de gamas", time: 91 },
  { text: "Colores y auras que completan mi alma", time: 96 },
  { text: "Dime que me acompañaras", time: 105 },
  { text: "A cruzar esta eternidad", time: 106 },
  { text: "Miles de esos astros caerán", time: 108 },
  { text: "Sobre el desierto", time: 110 },
  { text: "Lejos llegarás junto a mi", time: 112 },
  { text: "Déjame que te lo haga sentir", time: 114 },
  { text: "Nuestra historia quedará", time: 116 },
  { text: "En el firmamento", time: 118 },


];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 15 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 15 segundos (15,000 milisegundos)
setTimeout(ocultarTitulo, 15000);