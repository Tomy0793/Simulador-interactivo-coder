//Simulador asesoramiento/compra de colchon

alert("Bienvenido al guru del colchon!! \nEn este simulador vas a encontrar el colchon ideal para descanso!!\nEmpecemos!!ZZzzZ ")

//Definicion de variables

let confirmarDatos = true
let agregarOtroArticulo = true
let precio = 0
let opcionMedida
let pesoSoportado = 0
let tecnologia
let subtecnologia
let formaPago


function caracteristicas() { //funcion para guardar caracteristicas en variables
    do {
    

    opcionMedida = parseInt(prompt("Ingrese medida deseada: \nopciones: \n1)190x80 (1 plaza) \n2)190x140 (2 plazas)"))
    console.log(opcionMedida)
    pesoSoportado = parseInt(prompt("Ingrese soporte de peso que debe soportar: (ingrese solo el numero) \n- opciones: \n- 80Kg\n- 90Kg\n- 100Kg\n- 120Kg"))
    console.log(pesoSoportado)
    tecnologia = prompt("Que tecnologia busca?\nEscriba espuma o resorte ")
    console.log(tecnologia)
    subtecnologia =""
    switch (tecnologia) {
        case "espuma":
            subtecnologia = prompt("Elija que tipo de espuma busca: (escriba la opcion elegida)\n- alta densidad\n- media densidad\n- baja densidad")
            console.log(subtecnologia)    
            break;
        case "resorte":
            subtecnologia = prompt("Elija que tipo de resorte busca:\n- bonell\n- pocket")
            console.log(subtecnologia)    
            break;
            default:
            break;
    }
    confirmarDatos = confirm ("Datos bien ingresados?")
    console.log(opcionMedida) //confirmacion que los datos se guardaron
    console.log(pesoSoportado) //confirmacion que los datos se guardaron
    console.log(tecnologia) //confirmacion que los datos se guardaron
    console.log(subtecnologia) //confirmacion que los datos se guardaron
    }while(!confirmarDatos)

    } 

function determinarPrecio (){ //determina precio segun peso soportado y tecnologia
switch (opcionMedida) {
    case 1: //muestra medida en 190x80
    alert("usted ingreso:\nMedida: 190x80\nPeso soportado: "+pesoSoportado+"\nTecnologia: "+tecnologia+"\nSubtecnologia: "+subtecnologia)
    if (pesoSoportado==80 && tecnologia =="espuma"){
        precio = 20000
        console.log(precio)
    } else if (pesoSoportado==90 && tecnologia =="espuma"){
        precio = 30000
        console.log(precio)
    } else if (pesoSoportado==100 && tecnologia =="espuma"){
        precio = 40000
        console.log(precio)
    } else if (pesoSoportado==120 && tecnologia =="espuma"){
         precio = 50000
        console.log(precio)
    } else if (pesoSoportado==80 && tecnologia =="resorte"){
        precio = 25000
        console.log(precio)
    } else if (pesoSoportado==90 && tecnologia =="resorte"){
        precio = 35000       
        console.log(precio)
    } else if (pesoSoportado==100 && tecnologia =="resorte"){
        precio = 45000     
        console.log(precio)
    } else if (pesoSoportado==120 && tecnologia =="resorte"){
        precio = 55000  
        console.log(precio)
    } 
    break;
    case 2: //muestra medida190x140
    alert("usted ingreso:\n- Medida: 190x140\n- Peso soportado: "+pesoSoportado+"\n- Tecnologia: "+tecnologia+"\n- Subtecnologia: "+subtecnologia)
    if (pesoSoportado==80 && tecnologia =="espuma"){
        precio = 40000
        console.log(precio)
    } else if (pesoSoportado==90 && tecnologia =="espuma"){
        precio = 60000
        console.log(precio)
    } else if (pesoSoportado==100 && tecnologia =="espuma"){
        precio = 80000
        console.log(precio)
    } else if (pesoSoportado==120 && tecnologia =="espuma"){
        precio = 100000
        console.log(precio)
    } else if (pesoSoportado==80 && tecnologia =="resorte"){
        precio = 50000
        console.log(precio)
    } else if (pesoSoportado==90 && tecnologia =="resorte"){
        precio = 70000
        console.log(precio)
    } else if (pesoSoportado==100 && tecnologia =="resorte"){
        precio = 90000
        console.log(precio)
    } else if (pesoSoportado==120 && tecnologia =="resorte"){
        precio = 110000
        console.log(precio)
    } 
    default:
    break;
}
}

function calcularPRecio(precio) { //muestra las distintas formas de pago y como quedaria se le pasa el parametro precio para calcularlo, que obtuvimos de la funcion anterior
    let confirmarPago = true
    let precioCuota = 0
    do{
    formaPago = prompt("el precio de lista es de $"+precio+"\nIngrese forma de pago escribiendo:\n- efectivo\n- 12 cuotas\n- 6 cuotas")
    switch (formaPago) {
        case "efectivo":
            precio = precio * 0.4
            console.log(precio)
            alert("usted realizaria el pago en efectivo, abonando un total de: $"+precio)
            break;
        case "12 cuotas":
            precio = precio * 0.2
            precioCuota = precio / 12
            console.log(precio)
            console.log(precioCuota)
            alert("usted realizaria el pago en 12 cuotas, abonando un total de: $"+precio+" en 12 cuotas fijas de: $"+precioCuota)
            break;
        case "6 cuotas":
            precio = precio *0.3
            precioCuota = precio / 6
            console.log(precio) 
            alert("usted realizaria el pago en 6 cuotas, abonando un total de: $"+precio+" en 6 cuotas fijas de: $"+precioCuota)
            break;
        default:
            break;
    }
    
    confirmarPago = confirm("Quiere seleccionar esta forma de pago?")
    }while (!confirmarPago)
}

do { //aca empieza a correrel programa
caracteristicas()
determinarPrecio()
calcularPRecio(precio)

agregarOtroArticulo = confirm("Gracias por confiar en nosotros!\nDesea agregaralgo mas?")

}while (agregarOtroArticulo) //si es true agrega otro articulo, si es false finaliza la compra

alert("pronto nos contactaremos con vos para coordinar la entrega!")