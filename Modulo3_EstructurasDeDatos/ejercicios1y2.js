//guilleCM

//Enunciado:
//Programa un ejemplo que almacene en un array todas las cartas de la baraja,
//cada una representada con un diccionario que tenga un palo y un valor.


var cartasBaraja=[]
var palos = ["c", "t", "p", "d"]
var cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var palo = "palo"
var valor = "valor"
for(var i=0; i<palos.length; i=i+1) {
  for(var j=0; j<cartas.length; j=j+1) {
  	cartasBaraja.push({palo: palo[i], valor: cartas[j]})
  }
}

// 2. Partiendo del array que has construido en el ejercicio anterior,
// construye un algoritmo que filtre en un nuevo array sólo 
// las cartas rojas, y en otro array las cartas negras.

var cartasRojas=[]
var cartasNegras=[]


for(var i=0; i<cartasBaraja.length; i=i+1) {
  if (cartasBaraja[i].palo ==="c" || cartasBaraja[i].palo ==="d") {
    cartasRojas.push(cartasBaraja[i])
  } else {cartasNegras.push(cartasBaraja[i])}
}

// casos test //
//var cartasBaraja= [{palo:"c", valor:1},
//			  {palo:"d", valor:2}, 
//			  {palo:"t", valor:1}]
//>>> cartasRojas=[{palo:"c", valor:1}, {palo:"d", valor:2}]
//>>> cartasNegras=[{palo:"t", valor:1}]
