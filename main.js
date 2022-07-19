const carrito = [];
let hamburguesas = 200;
let papas = 150;
let bebidas = 100;
let suma = 0;
const bebidaGratis = 100;

function sumar (cantDePapas, cantDeBebidas, cantDeHamburguesas) {
    suma += cantDePapas * papas + cantDeHamburguesas * hamburguesas + cantDeBebidas + bebidas;
};

const personas = prompt("ingresa la cantidad de comensales");

for(i = 1; i <= personas; i++){
    const cantDePapas = carrito.push("papas = " + prompt("Ingresa la cantidad de papas del cliente N" + i));
    const cantDeHamburguesas = carrito.push("hamburguesas = " + prompt("Ingresa la cantidad de hamburguesas del cliente N" + i));
    const cantDeBebidas = carrito.push("bebidas = " + prompt("Ingresa la cantidad de bebidas del cliente N" + i));
    sumar(cantDePapas , cantDeHamburguesas , cantDeBebidas);
}

console.log(carrito); 





