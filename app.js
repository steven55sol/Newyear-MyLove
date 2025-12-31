function startAnimation(){
    const $fondo = document.querySelector(".fondo");
    const start = document.querySelector(".start");

    const icon = document.createElement('img');    
    icon.src = "./assets/hoja1.png";
    icon.style.width = "30px";
    icon.classList.add("icon")

    const heart = document.createElement('img');    
    heart.src = "./assets/heart.svg";
    heart.style.width = "30px";
    heart.classList.add("icon")
    
    // posición aleatoria dentro del viewport
    const x = Math.round(Math.random() * window.innerWidth,2);
    icon.style.left = x + "px";
    heart.style.left = x + "px";


    $fondo.appendChild(icon);
    start.appendChild(heart);

    // eliminar cuando termine la animación
    icon.addEventListener("animationend", () => {
        icon.remove();
    });

    heart.addEventListener("animationend", () => {
        heart.remove(); 
    });

}


function iniciarContadorFinDeAno() {

    
    function dosDigitos(n) {
        return String(n).padStart(2, "0");
    }

  const zona = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Fecha actual
  const ahora = new Date();

  // Año nuevo en la zona del usuario
  const anoNuevo = new Date(
    ahora.toLocaleString("en-US", { timeZone: zona })
  );
  anoNuevo.setFullYear(anoNuevo.getFullYear() + 1, 0, 1);
  anoNuevo.setHours(0, 0, 0, 0);

  function actualizar() {
    const ahoraLocal = new Date(
      new Date().toLocaleString("en-En", { timeZone: zona })
    );

    const diff = anoNuevo - ahoraLocal;

    if (diff <= 0) {
      Eliminarstart("fondo");
      startAnimation();

      document.addEventListener("click", (e)=>{
        if(e.target.matches(".heart3") || e.target.matches(".heart3 *")){
          const mensaje = document.querySelector(".mensaje");
          Eliminarstart("frase");
          mensaje.style.display = "block";
        }       
      });
      
    }else{
      Eliminarstart("start");
      startAnimation();
    }

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);



    document.getElementById("days").textContent = dosDigitos(dias);
    document.getElementById("hours").textContent = dosDigitos(horas);
    document.getElementById("minutes").textContent = dosDigitos(minutos);
    document.getElementById("seconds").textContent = dosDigitos(segundos);

  }

  actualizar();
  setInterval(actualizar, 1000);
}

function Eliminarstart(clase){
    const start = document.querySelector(`.${clase}`);
    start.style.display = "none";
}

function MensajeFinDeAno(){
    const frase = document.querySelector(".frase");
    frase.style.display = "block";
}


iniciarContadorFinDeAno();
