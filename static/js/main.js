// 🔧 CONFIGURACIÓN
const FECHA_INICIO = "2025-01-01"; // CAMBIA ESTA FECHA
const CLAVE = "miranda"; // CAMBIA ESTA CLAVE

// Mensajes
const mensajes = [
  "Miranda, te amo con todo lo que soy.",
  "Tú eres mi lugar favorito.",
  "Te elijo hoy, mañana y siempre."
];

const recuerdos = [
  "¿Te acuerdas cuando amanecíamos jugando y al día siguiente me tocaba ir a la universidad? Lo repetiría cada momento de mi vida contigo.",
  "Cuando escuchábamos música juntos y te dejaba canciones… siempre fue mi forma de decirte que te amo.",
  "Eres mi cosa favorita en este mundo."
];

const cartaTexto = `
Miranda...

Lo repetiría cada momento de mi vida contigo.

Te amo demasiado.
`;

const mensajeEl = document.getElementById("mensaje");
const recuerdoEl = document.getElementById("recuerdo");
const contadorEl = document.getElementById("contador");

// Funciones
function random(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

function refresh(){
  mensajeEl.textContent = random(mensajes);
  recuerdoEl.textContent = random(recuerdos);
}

document.getElementById("btn").addEventListener("click", refresh);
document.getElementById("btn2").addEventListener("click", () => {
  recuerdoEl.textContent = random(recuerdos);
});

// Contador
function updateContador(){
  const start = new Date(FECHA_INICIO);
  const now = new Date();
  const diff = now - start;

  const dias = Math.floor(diff / (1000*60*60*24));
  contadorEl.textContent = `Llevamos ${dias} días juntos 💞`;
}

setInterval(updateContador,1000);
updateContador();

// 🔐 Secreto
document.getElementById("btnSecret").addEventListener("click", ()=>{
  const val = document.getElementById("clave").value.toLowerCase();
  if(val === CLAVE){
    document.getElementById("cartaBox").style.display="block";
    document.getElementById("carta").textContent=cartaTexto;
  }else{
    alert("Clave incorrecta 😅");
  }
});

// 💗 Corazones
const hearts = document.getElementById("hearts");

function spawnHeart(){
  const heart = document.createElement("div");
  heart.className="heart-fall";
  heart.textContent="💖";
  heart.style.left=Math.random()*100+"vw";
  heart.style.animationDuration=(4+Math.random()*3)+"s";
  hearts.appendChild(heart);
  setTimeout(()=>heart.remove(),7000);
}

setInterval(spawnHeart,200);

refresh();