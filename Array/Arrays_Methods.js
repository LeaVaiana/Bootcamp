//ARRAY e i suoi metodi
    var colors = ["red","orange","yellow"]

    console.log(colors[0])//"red" per ottenere un elemento dell'array
    colors[0]="pink"//["pink","orange","yellow"], UPDATE dell'array
    colors[3]="green" //aggiungo un elemento usando l'indice successivo

//PUSH: per aggiungere un elemento senza sapere quanti elementi ho gia dentro
    colors.push("red")
    colors //ottengo la lista dei 4 colori, push inoltre mi aggiunge un numero che mi indica la lunghezza dell array


//POP: remove the last element in an array
    var colors = ["red","orange","yellow", "violet"]
    colors.pop() //mi ritorna l ultimo elemento dell array: "violet" 
    colors //se chiamo l array, mi ritorna l array anteriore senza l ultimo elemento
    var colors = ["red","orange","yellow"]


//UNSHIFT & SHIFT
    //Unshift aggiunge all'inizio dell'array, shift, toglie all'inziio dell array

    var nums = [1, 2, 3]
    nums.unshift("Hello"); //aggiungo la stringa "hello" e ritorna 4, la lunghezza della stringa e se chiamo:
    //per togliere il primo elemento della stringa:
    nums.shift() //mi ritorna e toglie il primo elemento dell'array, quindi chiamandolo:
    nums // mi ritorna [1,2,3]


//INDEXOF
    //Mi ritorna l'indice delle elemento nell'array
    var colors = ["red","orange","yellow", "violet","orange"]
    colors.indexOf("yellow") //2
    //se l'elemento è presente 2 volte, mi ritorna la prima posizione trovata
    colors.indexOf("orange") //1
    //mi ritorna -1 se non trova l elemento
    colors.indexOf("blue") //-1


//SLICE, per copiare porzioni di un array
    var nums = [1,2,3,"a","b",445,34]
        //ex: voglio solo un array di lettere, formo un nuovo array letters
    var letters = num.slice(3,5)// mi inizia dalla posizione 3 fino alla posizione 5 non inclusa e mi ritorna:
    letters // ["a","b"]
    //l array iniziale rimane invariato:
    nums // [1,2,3,"a","b",445,34]




//NESTED ARRAY
var friendGroups = [
    ["Anna","Marco","Giovanni"],
    ["Federico","Lea","Mamma"],
    ["Giuseppe","Miriam","Giulia"]
];
console.log(friendGroups[2]) //mi ritorna l array in posizione 2

console.log(friendGroups[2][0]) //mi ritorna l elemento 0 dell array 2