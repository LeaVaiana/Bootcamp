//ex: 1
function test(x,y) {
    return y-x;
}

test(10, 40); //30

//ex: 2 (anche se ci sono due return, l esecuzione si ferma al primo return
function test (x){
    return x*2;
    console.log(x);
    return x/2;
}

test(40); //80, si esegue solo la prima parte della funzione

//ex:3 scrivere la funzione isEven, che ritorna true se il numero è pari e false se il numero è dispari

function isEven(num){
    //return true if even
    if(num % 2 === 0){ 
    return true;
    }
    //return false if odd
    else {
        return false;
    }
}
//Opzione preferita: essendo un booleano, solo se si verifica mi torna true
function isEven (num){
    return num % 2 ===0;
}

//chiamo la funzione assegnando un valore all'argomento
isEven(5) //false
isEven(4) //true





