//ARRAY ITERATION


//FOR LOOP

// chiamare un elemento di un array con l'indice
var colors = ["yellow","red","blue","orange","green"];
console.log(colors[0]); //yellow
//metodo non efficiente se abbiamo un milione di items, not DRY code, ricorriao ai loop

for (var i = 0; i< colors.length; i++) { //inizio dalla posizione 0, per tutta la lunghezza con un incremento di 1 per passare atttraverso tutti gli items
    console.log(colors[i]);
}//ottengo la lista di colori 



//FOR EACH arr.forEach(anonymousFunction) (arr = nome dell array; (function(){....}) )

var colors = ["yellow","red","blue","orange","green"];

//e per chiamarlo (color is a placeholder):
colors.forEach(function(color){ 
    console.log("Inside de forEach")
})//risultato: mi ripete il loop 5 volte, una per ogni colore, ma non mi da nessuna informazione sul contenuto dell'array


//per ottener gli elementi dell'array: 

colors.forEach(function(item){ 
    console.log("color " + item)
})

colors.forEach(function(item){
    console.log("item " + colors);
});


// scriviamo la funzione printColor
function printColor(color){
    console.log("******");
    console.log(color);
    console.log("******");
}
//quando la chiamiamo:
printColor() //otteniamo *** undefined ***
//quando la chiamiamo:
printColor("purple") //otteniamo *** purple ***
//se la chiamiamo con ForEach 
colors.forEach(printColor);
//otteniamo per ogni loop tutte le informazioni contenute nell'array

//possiamo selezioneare un colore con su posizione
printColor(colors[0]) //ottengo le tre linee con il colore giallo




//Creare un array con il tuo nome e cognome, dove ogni posizione corrisponde a una lettera

var nomecognome= ["L","E","A","V","A","I","A","N","A"];

for (var i = 0; i< nomecognome.length; i++) { 
    console.log(nomecognome[i]);
}

//with forEach
nomecognome.forEach(function(lettera){
    console.log("lettera " + nomecognome)
});