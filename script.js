const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})


//  ******** Escribiendo HTML desde JavaScript ******

h1.innerHTML = 'Patito <br> Feo';
h1.innerText = 'Patito <br> Feo';

//pedimos que nos traiga el atributo
///console.log(h1.getAttribute('class'));

// modificar el atributo
///h1.setAttribute('class','rojo');

//le agregamo al atributo
h1.classList.add('rojo');
//le eliminamos al atributo
h1.classList.remove('verde');
//

// nos trae true o false si lo tiene
/// h1.classList.contains('verde');

input.value = "456"; 

// cremos desde js a html una imagen
const img = document.createElement('img');
img.setAttribute('src','https://media.revistagq.com/photos/5ca5e602944b834654eb8fe6/3:2/w_1600%2Cc_limit/los_10_coches_mas_caros_del_mundo_131086603.jpg');
console.log(img);

pid.innerHTML = "";
pid.append(img);
