//VERSION 1 while loop
// var answer = prompt("are we there yet?");

// while(answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("are we there yet?");
// }

// alert("YAY, WE MADE IT!!!");



//VERSION 2 IF
// if(answer === "yes") {
// 	alert("YAY, We made it!")
// } else {
// }



// VERSION 3

var answer = prompt("are we there yet?");

while(answer.indexOf("yes") === -1) {
	var answer = prompt("are we there yet?");
}

alert("YAY, WE MADE IT!!!");