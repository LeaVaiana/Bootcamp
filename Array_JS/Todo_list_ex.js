
window.setTimeout(function(){

    var todos = ["These are my todos"]; //modelliamo la lista in un array
    var input = prompt("What would you like to do"); //chiediamo user input 

    while(input !== "quit"){
        if (input === "list"){
            listTodos();
        } else if (input === "new") {
            addTodo();
        } else if(input ==="delete"){
          deleteTodo();  
        }
        input = prompt("What would you like to do?");
    }
    console.log("OK, you quit the app");


function listTodos(){ //se usassi console.log(Todos), vedrei la lista in una sola linea, meglio il forEach(placeholder todo)
    console.log("********")
    todos.forEach(function(todo, i){//aggiungo un secondo argomento nel forEach, i è l index di un todo particolare
    console.log(i + ":" + todo);
});
console.log("*******")
}

function addTodo(){
    var newTodo = prompt("Enter New Todo");
    todos.push(newTodo); //add to todos array
    console.log(newTodo); 
}

function deleteTodo(){//ask for index of todo to be deleted
    var index = prompt("Enter inde of todo to delete");
    todos.splice(index,1);//index è primo argomento dove vogliamo tagliare, secondo argomento è quanti itmes vogliamo cancellare
    //se aggiungessi (index,5) mi cancellerebbe 5 items dopo quell' index
    console.log("Deleted Todo");

}



            

},500);//il set Timeout è stato inserito per evitare che chrome blocchi l' html fino a quando non è stato chiuso il prompt