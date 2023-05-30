const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#resultado');

// addEventListener

/*
// cuando no tenia un formulario en html

btn.addEventListener('click',btnClick);

function btnClick(){
    //console.log("escuchando el evento del click");
    //console.log(Number(input1.value) + Number(input2.value));
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}

*/

form.addEventListener('submit',sumarInputValues);
function sumarInputValues(event){
    //console.log({event});
    event.preventDefault();
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}
