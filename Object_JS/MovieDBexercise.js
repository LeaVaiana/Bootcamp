//Vogliamo costruire un databse di film
//Creiamo un array chiamato movies e dentro mettiamo degli oggetti, ogni oggetto per un film con le seguenti proprietá: titolo, rating e un booleano che indica se è stato visto o no

var movies = [
    {
        title: "Roma",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Star wars",
        hasWatched: false,
        rating: 4.5
    },
    {
        title: "Miserabili",
        hasWatched: true,
        rating: 3
    }
]

//per chiamarla:
movies // ritorna i 3 oggetti

// Adesso vogliamo scorrere l'array e stampare una linea per ogni oggetto
// La stampa sará costituita da una var result (se è stato visto o no il film) + 2 results (titolo e il rating)

movies.forEach(function(movie){ 
    var result = "You have ";
    if(movie.hasWatched){
        result += "whatched ";  
    } else {
        result += "not seen ";
    } 
    result += "\"" + movie.title + "\" - ";
    result += "\"" + movie.rating + " stars";
    console.log(result)
    })


//Possiamo riformulare estrapolando la funzione movie, con l'uso di un'altra funzione buildString


function buildString(movie){
    var result = "You have ";
    if(movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += "\"" + movie.rating + "stars";
    return result;
    }


    movies.forEach(function(movie){
        console.log(buildString(movie));
    });

    
