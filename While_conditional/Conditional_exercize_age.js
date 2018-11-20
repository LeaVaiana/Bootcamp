//get age and convert it to a number, prompt always returns a string
var age = Number(prompt("What's your age"))
while(isNaN(age)) {
age = Number (prompt("What is your age, insert a number"))
alert("Your age is "+ age + " years old")
}
