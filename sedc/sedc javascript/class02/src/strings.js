console.log("Hello" + " " + "SEDC");

var helloGreeting = "Hello";
var loc = "from SEDC";
var greeting = helloGreeting + " " + loc;
console.log(greeting);

var first = 10;
var second = "example";
var result = first + second;
console.log("The result is: "+ result);
// console.log(result);
console.log(typeof(result));

var num1 = 10;
var num2 = "12";
var res = num1 + num2;
console.log("The result is: "+ res);
console.log(typeof(res));

// Interpolation

var academyName = "SEDC";
var sentence = `I am a student in ${academyName}`;
console.log(sentence);

var firstName = "Tanja";
var lastName = "Stojanovska"
var text = `${firstName} ${lastName} is a trainer in ${academyName}`;
console.log(text);

//Quotes
var message = "It's really nice to be outside";
console.log(message);

var secondMessage = "It's really \"nice\" weather outside";
console.log(secondMessage);

var thirdMessage = 'It\'s really nice weather outside';
console.log(thirdMessage);

var fName =null;
var lName ="Petrovska";
console.log(fName + lName);

fName = "Ana";
console.log(fName + lName);