//SCHEMA FUNZIONE
//function doSomething(){
//    code;
//}



// Funzione che seleziona solo i numeri pari, function isEven
function isEven(num){ //num è l argomento dove inserire il valore
    if(num%2 ===0){ //se il modulo del valore è zero, allora è un numero pari
        return true
    }else{          //otherwise
        return false
    }
}

//Essendo un booleano possiamo scrivere la funzione piú semplicemente:
function isEven(num){
	return num % 2 === 0;
}


  //definisco la funzione factorial
  function factorial(num){
    var result = 1; //definisco la variabile risultato
    for(var i = 2; i <= num; i++){ //loop a partire dal 2, dato che 1*1 non avrebbe senso (factorial(4) 4 x 3 x 2 x 1)
        result *= i; //conservo il risultatto dentro la variabile result
    }
    return result; //ottengo il risultato della variabile
  }

  //Replace a spcific character in a string: replace function
  //ex: replace all "-" with "_" and return string
  function replaceCharacter(str) {
      var newString = str.replace(/-/g , "_");
  return newString;
  }

