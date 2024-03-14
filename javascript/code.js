const firstCol =  document.querySelector("#firstCol");
const secondCol =  document.querySelector("#secondCol");
const thirdCol =  document.querySelector("#thirdCol");

const sottraiUno = document.createElement("p");
const numero = document.createElement("p");
const aggiungiUno = document.createElement("p");


sottraiUno.textContent = '-';
sottraiUno.id = 'sottraiUno';
firstCol.appendChild(sottraiUno);

numero.textContent = '0';
numero.id = 'numero';
secondCol.appendChild(numero);

aggiungiUno.textContent = '+';
aggiungiUno.id = 'aggiungiUno';
thirdCol.appendChild(aggiungiUno);

let number = 0;

sottraiUno.addEventListener("click", e => {
    number = number - 1;
    document.getElementById("numero").innerHTML = number;
})

aggiungiUno.addEventListener("click", e => {
    number = number + 1;
    document.getElementById("numero").innerHTML = number;

})
