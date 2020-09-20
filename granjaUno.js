window.addEventListener('click', inicio);
document.getElementById("botonRiego").addEventListener('click', e => e.preventDefault());
document.getElementById("botonRiegoAutomatico").addEventListener('click', e => e.preventDefault());
document.getElementById("agregar").addEventListener('click', e => e.preventDefault());

var cherryValor = 0, tomateValor = 0, pepinoValor = 0, lechugaValor = 0,
    sandiaValor = 0, pimientoValor = 0, melonValor = 0;

document.getElementById("pimientoImg").style.display = "none";
document.getElementById("tomateImg").style.display = "none";
document.getElementById("cherryImg").style.display = "none";
document.getElementById("pepinoImg").style.display = "none";
document.getElementById("lechugaImg").style.display = "none";
document.getElementById("sandiaImg").style.display = "none";
document.getElementById("melonImg").style.display = "none";
document.getElementById("MENSAJE").style.display = "none";
document.getElementById("MENSAJEP").style.display = "none";

function inicio(e) {
    console.log(e.target.id);
    switch(e.target.id){
        case'pepinoImg':
        document.getElementById("MENSAJEP").style.display = "";
        break;
        case'tomateImg':
        document.getElementById("MENSAJEP").style.display = "";
        break;
    }
    if (e.target.id == 'cerrar') {
        document.getElementById("MENSAJE").style.display = "none";
        document.getElementById("MENSAJEP").style.display = "none";
    }
    

    switch (e.target.id) {
        case 'cherry':

            if (cherryValor == 0) {
                cherryValor = 1;
                console.log("valor1: " + cherryValor);
                document.getElementById("cherry").style.border = "3px solid white"
                document.getElementById("cherry").style.boxSizing = "border-box"
                document.getElementById("cherry").style.borderRadius = "100%";

            } else if (cherryValor > 0) {
                cherryValor = 0;

                console.log("Elemento quitado ");
                document.getElementById("cherry").style.border = "";
            }

            break;
        case 'tomate':

            if (tomateValor == 0) {
                tomateValor = 1;

                console.log("valor1: " + tomateValor);
                document.getElementById("tomate").style.border = "3px solid white"
                document.getElementById("tomate").style.boxSizing = "border-box"
                document.getElementById("tomate").style.borderRadius = "100%";
            } else if (tomateValor > 0) {
                tomateValor = 0;

                console.log("Dio click " + tomateValor + " veces");
                document.getElementById("tomate").style.border = "";
            }

            break;
        case 'pepino':

            if (pepinoValor == 0) {
                pepinoValor = 1;

                console.log("valor1: " + pepinoValor);
                document.getElementById("pepino").style.border = "3px solid white"
                document.getElementById("pepino").style.boxSizing = "border-box"
                document.getElementById("pepino").style.borderRadius = "100%";
            } else if (pepinoValor > 0) {
                pepinoValor = 0;

                console.log("Dio click " + pepinoValor + " veces");
                document.getElementById("pepino").style.border = "";
            }

            break;
        case 'lechuga':

            if (lechugaValor == 0) {
                lechugaValor = 1;

                console.log("valor1: " + lechugaValor);
                document.getElementById("lechuga").style.border = "3px solid white"
                document.getElementById("lechuga").style.boxSizing = "border-box"
                document.getElementById("lechuga").style.borderRadius = "100%";
            } else if (lechugaValor > 0) {
                lechugaValor = 0;

                console.log("Dio click " + lechugaValor + " veces");
                document.getElementById("lechuga").style.border = "";
            }

            break;
        case 'sandia':

            if (sandiaValor == 0) {
                sandiaValor = 1;

                console.log("valor1: " + sandiaValor);
                document.getElementById("sandia").style.border = "3px solid white"
                document.getElementById("sandia").style.boxSizing = "border-box"
                document.getElementById("sandia").style.borderRadius = "100%";
            } else if (sandiaValor > 0) {
                sandiaValor = 0;

                console.log("Dio click " + sandiaValor + " veces");
                document.getElementById("sandia").style.border = "";
            }

            break;
        case 'pimiento':

            if (pimientoValor == 0) {
                pimientoValor = 1;
                console.log("valor1: " + pimientoValor);
                document.getElementById("pimiento").style.border = "3px solid white"
                document.getElementById("pimiento").style.boxSizing = "border-box"
                document.getElementById("pimiento").style.borderRadius = "100%";
            } else if (pimientoValor > 0) {
                pimientoValor = 0;

                console.log("Dio click " + pimientoValor + " veces");
                document.getElementById("pimiento").style.border = "";
            }

            break;
        case 'melon':

            if (melonValor == 0) {
                melonValor = 1;
                console.log("valor1: " + melonValor);
                document.getElementById("melon").style.border = "3px solid white"
                document.getElementById("melon").style.boxSizing = "border-box"
                document.getElementById("melon").style.borderRadius = "100%";
            } else if (melonValor > 0) {
                melonValor = 0;

                console.log("Dio click " + melonValor + " veces");
                document.getElementById("melon").style.border = "";
            }

            break;

        case 'agregar':

            if (cherryValor == 1) {
                document.getElementById("cherryImg").style.display = "";
            } else if (cherryValor == 0) {
                document.getElementById("cherryImg").style.display = "none";
            }
            if (tomateValor == 1) {
                document.getElementById("tomateImg").style.display = "";
            } else if (tomateValor == 0) {
                document.getElementById("tomateImg").style.display = "none";
            }
            if (pepinoValor == 1) {
                document.getElementById("pepinoImg").style.display = "";
            } else if (pepinoValor == 0) {
                document.getElementById("pepinoImg").style.display = "none";
            }
            if (lechugaValor == 1) {
                document.getElementById("lechugaImg").style.display = "";
            } else if (lechugaValor == 0) {
                document.getElementById("lechugaImg").style.display = "none";
            }
            if (sandiaValor == 1) {
                document.getElementById("sandiaImg").style.display = "";
            } else if (sandiaValor == 0) {
                document.getElementById("sandiaImg").style.display = "none";
            }
            if (pimientoValor == 1) {
                document.getElementById("pimientoImg").style.display = "";
            } else if (pimientoValor == 0) {
                document.getElementById("pimientoImg").style.display = "none";
            }
            if (melonValor == 1) {
                document.getElementById("melonImg").style.display = "";
            } else if (melonValor == 0) {
                document.getElementById("melonImg").style.display = "none";
            }

            document.getElementById("tomate").style.border = "";
            document.getElementById("cherry").style.border = "";
            document.getElementById("pepino").style.border = "";
            document.getElementById("lechuga").style.border = "";
            document.getElementById("sandia").style.border = "";
            document.getElementById("pimiento").style.border = "";
            document.getElementById("melon").style.border = "";
            cherryValor = 0, tomateValor = 0, pepinoValor = 0, lechugaValor = 0,
                sandiaValor = 0, pimientoValor = 0, melonValor = 0;
            break;
    }
}





