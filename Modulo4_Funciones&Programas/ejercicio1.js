//autor: guilleCM

//enunciado:
//Desarrolla una función que puntúe una mano de cartas,
// que tenga como parámetro un array de cartas, cada una 
// representada por un diccionario con palo y valor. 
// Al puntuar, las cartas suman su valor excepto si es
// un as que suma 20. Prueba a invocarla con varias
// manos de cartas con y sin ases.

function puntua(mano) {
  var total=0;
  for (var i=0; i<mano.length; i++) {
    if (mano[i].valor === 1) {
      total = total + 20;
    } else {
      total = total + mano[i].valor;
    }
  }
  return total;
}


//Casos test

console.log (puntua([{valor:1},{valor:1},{valor:1}]))
//>>> 60

console.log (puntua([{valor:5},{valor:5},{valor:5}]))
//>>> 15

console.log (puntua([{valor:10},{valor:10},{valor:12}]))
//>>>32