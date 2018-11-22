//DEFINIRE UNA FUNZIONE
function sayHi() {
  console.log("HEllO");
  console.log("Goodbye");
}
//RICHIAMARE UNA FUNZIONE
sayHi() //"Hello", Goodbye"
//if I want to know code inside fuction, don't use ():
sayHi



//ARGUMENT: Adesso vogliamo che al saluto aggiunga il nome, il nome lo mettiamo nell argomento

// qui non dice il nome
function sayHi() {
  console.log("Hello there!");
}
//qui dice il nome
function sayHello(name) {
  console.log("Hello there " + name + "!");
}
//per chiamarlo, chiamiamo la funzione aggiungendo nell'argomento il nome che vogliamo utilizzare
sayHello("Rusty")


//MULTIPLE ARGUMENTS
// ES:1 Calcolare l'area di un rettangolo (1: dichiaro la funzione, 2: chiamo la funzione)
//1:
function area(length, width){
  console.log(length*width);
}
//2:
area(9,2); //18



//ES:2 per chiamare piú persone

function greet(name1, name2, name3){
  console.log("hi" + name1);
  console.log("hi" + name2);
  console.log("hi" + name3);
}

greet("Mamma", "papá", "Miriam"); //mi ritornerá i 3 saluti (se non aggiungessi uno dei nomi, non mi darebbe errore ma solo: hi undefined)

//funzione checkcredential, arguments email and password. Possiamo chiamare questa funzione per verificare le credenziali
checkCredentials("rusty@gmail.com","Rusty")


//RETURN KEYWORD
   //dichiaro la funzione e la chiamo
function square(x){
  console.log(x*x);
}

square(4) // 16 mi stampa il valore, ma non posso usarlo nel codice, per avere l'output, bisogna sostituire console.log con return
function square(x){
  return (x*x);
}

square(4) // 16, e lo uso dentro del seguente codice:
"4 squared is: " + square(4) // "4 squared is: 16"

//dato che ho gia dichiarato la funzione square, adesso posso usarla dentro una variabile
var result = square(10); //enter
result //enter
1000 //enter







//CAPITALIZE (funzione che fa maiuscola la prima lettera)

function capitalize(str){
  return str.chartAt(0).toUpperCase() + str.slice(1);
}

var city="paris";
var capital = capitalize(city);

//FUNCTION DECLARATION VS FUNCION EXPRESSION (SECOND WAY TO WRITE A FUNCTION)

//FUNCTION EXPRESSION
var sayHi = function(){
  console.log("CIAO");
}
//chiamo la funzione
sayHi() //"CIAO"

//adesso decido che la funzione = 34
sayHi=34
//con la Function expression posso riassegnare un valore

//scrivi il quadrato dei primi 15i numeri interi e una scritta alla fine dell'elaborazione

function square (){
  for (i=1; i<=15; i++)
  document.write(i*i + "br");
  document.write("END");
}