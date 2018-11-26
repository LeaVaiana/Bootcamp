//OBJECT

//3 ways for creating objects

//make an empty object and then add to it
var person = {}
person.name = "Lea";
person.city = "Bcn";
person.age = 40;

//all at once (togliere la proprietá, sostituire = con :, sostituire ; con ,)
var person = {
    name : "Lea",
    city : "Bcn",
    age : 40,  
}

//less used way, cambia solo la prima linea e non si usano le {}
var person = new Object();
person.name = "Lea";
person.city = "Bcn";
person.age = 40;


//ARRAY vs OBJECTS

//ARRAY used to store list of data, segue un ordine, ogni item ha un index specifico. Ej. gruppo di cani
var dogs = ["Rusty","Fido","Dido"]

dogs //["Rusty","Fido","Dido"]


//OBJECT, elementi senza un ordine particolare. Ej, un cane e le sue carattristiche
var dog = {
    name : "Rusty"
    breed: "Lab"
}
/
dog // Object {name: "Rusty", breed: "Lab"}


//ARRAY vs OBEJCTS; come estrapolare gli elementi

//ARRAY: ho bisogno di conoscere l'indice
dogs[1]; // "Fido"

//OBJECT: 2 opzioni:
dog ["name"] // "Rusty"
dog.name // "Rusty"

//ARRAY vs OBEJCTS; come aggiungere elementi

//ARRAY: push or shift o manualmente sapendo che indice voglio aggiungere (c'e' un ordine da rispettare)
dogs.push("Dino") //4
// se chiamo dogs:
var dogs = ["Rusty","Fido","Dido", "Dino"]

//OBJECTS: 
dog ["age"] = 6; //oppure dog.age = 6;
dog //Object {name: "Rusty", breed: "Lab", age: 6}


//ARRAY vs OBJECTS; update elements

//ARRAY: prima devo chiamare l'elemento che voglio sostituire e poi lo riassegno
dogs[1] // "Fido"
dogs [1] = "Lucy"

//object (posso fare l'update senza bisogno di chiamare l'elemento da sostituire)
dog.breed = "Black"


