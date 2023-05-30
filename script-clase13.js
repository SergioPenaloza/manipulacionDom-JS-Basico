const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#resultado');

// Eventos en JavaScript: interactuando con usuarios

function btnClick(){
    //console.log("escuchando el evento del click");
    //console.log(Number(input1.value) + Number(input2.value));
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}