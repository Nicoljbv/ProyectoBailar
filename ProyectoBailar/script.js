let esqueleto = "off";
let esqueletoStop = document.getElementById("esqueletoquieto");
let botonSonido = new Audio ("C:/Users/LENOVO/Documents/ProyectosJS/ProyectoBailar/sound/botonbailar.mp3");
let botonMusica = new Audio ("C:/Users/LENOVO/Documents/ProyectosJS/ProyectoBailar/sound/audio.mp3")

function bailar() {
    if (esqueleto == "off"){
        esqueleto = "on";
        esqueletoStop.classList.add("on");
        esqueletoStop.addEventListener('click', ()=> {
            botonSonido.play();
            botonMusica.play();
        })
        console.log("on");
    }else{
        esqueleto = "off";
        esqueletoStop.classList.remove("on");
        esqueletoStop.addEventListener('click', ()=> {
            botonMusica.pause();
        })
        console.log("off");
    }
}

