var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i <pacientes.length; i++){

    var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdIMC = paciente.querySelector(".info-imc");

var pesoValido = validaPeso(peso);
var AlturaValida = validaAltura(altura);

if(!pesoValido) {
    console.log("Peso invalido");
    pesoValido = false;
tdIMC.textContent = "Peso Invalido";
    paciente.classList.add("paciente-invalido")
}

if(!AlturaValida){
    console.log("Altura Invalida")
    pesoValido = false;
tdIMC.textContent = "Altura Invalida";
paciente.classList.add("paciente-invalido")

    
}


if (pesoValido && AlturaValida){
var imc = calculaImc(peso,altura);
tdIMC.textContent = imc;
}
}

// titulo.addEventListener("click",function() {
// });

// function mostraMensagem(){
//     console.log("Olá eu fui clicado!");
// }

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else {
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else {
        return false;
    }
}


function calculaImc(peso,altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}