//stampare da 1 a 6

var count = 1;
while(count <= 6) {
 console.log("count is: " + count);
 count++;
}

//stampare numeri a due a due
var count = 5;
while(count <= 20) {
 console.log("count is: " + count);
 count+=2;
}

//stampare una stringa (definisco la stringa, inizializzo la variabile e con il while passo per ogni posizione della stringa)

var str = "hello"
var count = 0;
while(count < str.length) {
    console.log(str[count])
    count++;
}

//stampare a due a due da 1 a 9 (mi stamperá un 11 ma con un segnale di errore, non lo stampa, ma è l ultimo calcolo eseguito)
var num = 1;
while(num<=10){
    console.log(num);
    num +=2;
}

//stampare tutti i multipli di 4 dei numeri tra 1 e 20

var num = 1
while(num <=20) {
    if(num % 4 === 0){ //è lo statment che verifica se il numero è multiplo di 4
        console.log(num);
    }
    num++;
}

//stampare tutti i numeri tra -10 e 19 with while loop

console.log("Printing all numbers between -10 and 19")
var num = -10
while(num <=19) {
    console.log(num);
    num++;
}
//stampare tutti i numeri tra -10 e 19 with for loop
for(var count = -10; count <20; count++){
    console.log(count);
}


//stampare tutti i numeri pari tra 10 e 40
console.log("Printing all even numbers between 10 and 40")
var num = 10
while(num <= 40){
    console.log(num);
    num+=2;
}

//second option, with if statement inside while for even numbers:

var num = 10
while(num <= 40){
if(num%2===0){
    console.log(num);
}
num+=2;
}

//with for loop
for(var i=10; i <= 40; i += 2){
    console.log(i);
}

for(var i = 10; i<=40; i += 1){
    if(i % 2 ===0) {
        console.log(i);
    }
}



//stampare tutti i numeri dispari tra 300 e 333

console.log("Printing all odd numbers between 300 and 333")
var num = 300
while(num <=333) {
     if(num%2 !==0) {
        console.log(num);
     }   
    num++;
}
for(var i = 300; i <=333; i++){
    if(i%2 !==0) {
    console.log(i);
 } 
}  

//stampare tutti i numeri tra 5 e 50 divisibile per 3 e per 5
console.log("Printing all even numbers between 5 and 50 divisible by 3 and 5")
var num = 5
while(num <=50) {
    if(num % 3 === 0 && num % 5 === 0){
        console.log(num);
    }
    num+=1;
}

for(var i= 5; i<=50; i+=1){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i);
    }
}

//FOR LOOP
//printing numbers from 1 to 5 with  for loop
for(var count = 1; count <6; count++){
    console.log(count);
}


//Printing each character in a string
//with FOR LOOP
var str = "hello";
for (var i = 0; i < str.length; i++){
    console.log(str[i]); //ci sono due variabili, str & i
}

//with WHILE LOOP
var str = "hello";
var count = 0
while(count < str.length) {
    console.log(str[count]);
    count++;
}
//stampa il risultado della stringa contando le letterea due a due
var str = "ahceclwlxo";
for(var i = 1; i < str.length; i+=2){
    console.log(str[i]);
}

var str = "ahceclwlxo";
var count = 1
while (count <= str.length){
    console.log(str[count])
    count+=2
}