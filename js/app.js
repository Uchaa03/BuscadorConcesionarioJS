import coches from "./db.js"; //Importación de coches.

//Hacemos query selectors para los inputs
const marca = document.querySelector("#marca") //Selector de marca
const year = document.querySelector("#year") //Selector de año
const precioMinimo = document.querySelector("#minimo") //Selector de precio minimo
const precioMaximo = document.querySelector("#maximo") //Selector de precio maximo
const puertas = document.querySelector("#puertas") //Selector de puertas
const transmision = document.querySelector("#transmision") //Selector de tipo de transimision
const color = document.querySelector("#color") //Selector de color
const cochesBuscar = {
    marca: "",
    year: "",
    precioMinimo: "",
    precioMaximo: "",
    puertas: "",
    transmision: "",
    color: ""
}

//Hacemos sus respectivos listener a los inputs
marca.addEventListener("input", e => {
    cochesBuscar.marca = e.target.value
    buscarCoches()
})

year.addEventListener("input", e => {
    cochesBuscar.year = e.target.value
    buscarCoches()
})

precioMinimo.addEventListener("input", e => {
    cochesBuscar.precioMinimo = e.target.value
    buscarCoches()
})

precioMaximo.addEventListener("input", e => {
    cochesBuscar.precioMaximo = e.target.value
    buscarCoches()
})

puertas.addEventListener("input", e => {
    cochesBuscar.puertas = e.target.value
    buscarCoches()
})

transmision.addEventListener("input", e => {
    cochesBuscar.transmision = e.target.value
    buscarCoches()
})

color.addEventListener("input", e => {
    cochesBuscar.color = e.target.value
    buscarCoches()
})

//Sacar el año mas antiguo
const antiguoYear = coches.reduce((accum, current) => {
    return current.year < accum.year? current : accum
})

//Sacar el año mas nuevo
const nuevoYear = coches.reduce((accum, current) => {
    return current.year > accum.year? current : accum
})
//Bucle para introducir los años
for (let i = antiguoYear.year; i <= nuevoYear.year; i++){
    const opcion= document.createElement("option")
    opcion.textContent = i
    opcion.value = i
    year.appendChild(opcion)
}

function buscarCoches() {
    let cochesSeleccionados = coches.filter(coche => filtrarMarca(coche))
        .filter(coche => filtrarMarca(coche))
        .filter(coche => filtrarYear(coche))
        .filter(coche => filtrarPrecioMinimo(coche))
        .filter(coche => filtrarPrecioMaximo(coche))
        .filter(coche => filtrarPuertas(coche))
        .filter(coche => filtrarTransmision(coche))
        .filter(coche => filtrarColor(coche))
    console.log(cochesSeleccionados)
}



function filtrarMarca(coche){
    if (cochesBuscar.marca){ //Si se le añadio una marca de filtro, este
        console.log(cochesBuscar.marca, coche.marca)
        console.log(cochesBuscar.marca === coche.marca)
        return cochesBuscar.marca === coche.marca
    }else{
        return coche
    }
}

function filtrarYear(coche){
    if (cochesBuscar.year){
        return cochesBuscar.year === `${coche.year}`
    }else{
        return coche
    }
}

function filtrarPrecioMinimo(coche){
    if (cochesBuscar.precioMinimo){
        return cochesBuscar.precioMinimo <= `${coche.precio}`
    }else{
        return coche
    }
}

function filtrarPrecioMaximo(coche){
    if (cochesBuscar.precioMinimo){
        return cochesBuscar.precioMaximo >= `${coche.precio}`
    }else{
        return coche
    }
}

function filtrarPuertas(coche){
    if (cochesBuscar.puertas){
        return cochesBuscar.puertas === `${coche.puertas}`
    }else{
        return coche
    }
}

function filtrarTransmision(coche){
    if (cochesBuscar.transmision){
        return cochesBuscar.transmision === coche.transmision
    }else{
        return coche
    }
}

function filtrarColor(coche){
    if (cochesBuscar.color){
        return cochesBuscar.color === coche.color
    }else{
        return coche
    }
}