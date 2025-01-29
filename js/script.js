const btnPlus = document.querySelector(".js-plus");
const contTransport = document.querySelector(".conteneur-transport");

btnPlus.addEventListener("click", toggleTransport);

function toggleTransport(){
    contTransport.classList.toggle("invisible");
}