//guilleCM

//Utiliza un bucle para recorrer todas las cartas de la baraja, 
//desde el 1 al 12 de cada palo.
//Imprime en pantalla solamente las cartas rojas que sea múltiplos de 3.

var palos = "DCTP"
var monton = 12
for (var paloActual=0; paloActual<=4; paloActual=paloActual+1) {
  for (var cartaEscogida=1; cartaEscogida<=monton; cartaEscogida=cartaEscogida+1) {
    if (cartaEscogida%3==0) {
      if (paloActual==0||paloActual==1) {
        console.log (cartaEscogida+palos[paloActual]);
      }
    }
  }
}
