//SCOPE/AMBITO
//da una funzione posso ottenere il suo valore dentro la variabile chiamando la funzione:
function doMath(){
    var x = 40;
    console.log(x);
}

doMath() //40

//Posso definire la variabile anche fuori la funzione e continueremo ad averne l'accesso
var y = 99;
y //99

function doMath(){
    console.log(y);
}
doMath() //99

//Quindi: se definisco una variabile fuori una funzione posso usarla dentro la funzione ma non viceversa


//scope example

var num = 8;
function doMath() {
    num += 1;
    if(num % 5 == 0) {
        return true
    } else {
        return false
    }
}

num +=1;//9
doMath()//true

//num +=1 mi chiede di fare 8+1, doMath, parte dal 9 (non dall'8) e mi chiede di fare (9 + 1)/5, quindi true


// date due funzioni, con var name dentro la prima delle due, al chiamare le due funzioni
//solo la prima ci ritornerá il valore della variabile perchè var name è solo accessibile nello scope della prima funzione

function ciao(){
    var name = "Lea";
    console.log(name)
}
function arrivederci(){
    console.log(name) //var name non è accessibile da questa seconda funzione
}

ciao()// Lea
arrivederci// undefined