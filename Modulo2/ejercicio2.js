//guilleCM

//Utiliza un bucle para recorrer todos los años bisiestos anteriores a 2050, 
//e imprímelos en la consola.

for (var añoActual=2016; añoActual<=2050; añoActual=añoActual+1) {
  if (añoActual%4 == 0 && añoActual%100 !== 0 || añoActual%400 == 0) {
      console.log(añoActual);
  }
}