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
        mostrarCoches(cochesSeleccionados)
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
        return cochesBuscar.precioMinimo <= coche.precio
    }else{
        return coche
    }
}

function filtrarPrecioMaximo(coche){
    if (cochesBuscar.precioMaximo){
        return cochesBuscar.precioMaximo >= coche.precio
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
function crearTabla() {
    const contenedor = document.querySelector("#resultado")
    const tabla = document.createElement("table")
    const tablaHead = document .createElement("thead")
    const trHead = document.createElement("tr")
    const tablaBody = document.createElement("tbody")
    const marca = document.createElement("th")
    marca.textContent = "MARCA"
    const year = document.createElement("th")
    year.textContent = "AÑO"
    const precio = document.createElement("th")
    precio.textContent = "PRECIO"
    const puertas = document.createElement("th")
    puertas.textContent = "PUERTAS"
    const transmision = document.createElement("th")
    transmision.textContent = "TRANSMISION"
    const color = document.createElement("th")
    color.textContent = "COLOR"
    //Agregamos los titulos a la fila
    trHead.appendChild(marca)
    trHead.appendChild(year)
    trHead.appendChild(precio)
    trHead.appendChild(puertas)
    trHead.appendChild(transmision)
    trHead.appendChild(color)
    //Agregamos la fila al thead, tabla y contenedor
    tablaHead.appendChild(trHead)
    tabla.appendChild(tablaHead)
    tabla.appendChild(tablaBody)
    tabla.classList.add("u-full-width")
    contenedor.appendChild(tabla)
    contenedor.classList.add("espaciado-lados")
}
crearTabla()

//Insercción de listado de coches en la tabla cada vez que buscamos
function mostrarCoches(listaCoches) {
    const tbody = document.querySelector("tbody")
    limpiarHTML()
    listaCoches.forEach(coche => {
        //Creamos  la fila
        const tr = document .createElement("tr")
        //Creamos los elementos
        const tdMarca = document.createElement("td")
        tdMarca.textContent = coche.marca
        const tdYear = document.createElement("td")
        tdYear.textContent = coche.year
        const tdPrecio = document.createElement("td")
        tdPrecio.textContent = coche.precio
        const tdPuertas = document.createElement("td")
        tdPuertas.textContent = coche.puertas
        const tdTransmision = document.createElement("td")
        tdTransmision.textContent = coche.transmision
        const tdColor = document.createElement("td")
        tdColor.textContent = coche.color
        //Agregamos los elementos a la fila
        tr.appendChild(tdMarca)
        tr.appendChild(tdYear)
        tr.appendChild(tdPrecio)
        tr.appendChild(tdPuertas)
        tr.appendChild(tdTransmision)
        tr.appendChild(tdColor)
        //Agregamos la fila al body
        tbody.appendChild(tr)
    })
}

function limpiarHTML() {
    const tbody = document.querySelector("tbody")
    tbody.innerHTML = "" //Reseteamos la tabla.
}