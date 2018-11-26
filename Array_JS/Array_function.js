
//Array function (printReverse, isUniform, sumArray, max)

//*** printReverse (in questo caso inizio a contare dall'ultima posizione dell'array -1, e fino a che l i'indice sia maggiore di zero)
function printReverse(arr){
	for(var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}

printReverse([1,2,3,4]);


//*** isUniform() (comparo il primo elemento dell array in un loop con l'elemento seguente)
//creiamo la variabile del primo item e compariamo questo item con l'elemento seguente, scorrendo l array con un loop.
//quando trova un elemento diverso mi ritorna false, se arriva alla fine dell'array e tutti gli elementi sono uguali, ritorna true

function isUniform(arr){
	var first = arr[0]; //creiamo la variabile del primo item
	for(var i = 1; i < arr.length; i++){ //inizio da i=1, per non comparare la posizione 0 con la posizione 0!
		if(arr[i] !== first){
			return false;
		}
	}
	return true;
}


// *** sumArray() , array di numeri che ritorna la somma, nella var result immagazzino il risultato del loop, il suo valore iniziale è zero***

function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){ //prendi ogni elemento e lo aggiungi al totale
		total += element;
	});
	return total;
}

// *** max() , in un array di numeri mi ritorna il numero piú alto***

function max(arr){
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){ //faccio il loop attraverso ogni elemento e lo compariamo con il max in quel momento
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}