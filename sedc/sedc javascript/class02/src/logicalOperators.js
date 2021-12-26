// AND 
console.log("AND");
console.log(true && true); //true
console.log(true && false); //false 
console.log(false && true); //false
console.log(false && false); //false
// OR 
console.log("OR");
console.log(true || true); //true
console.log(true || false); //true 
console.log(false || true); //true
console.log(false || false); //false

// ! Negation
console.log("!");
console.log(!true); // false
console.log(!false); //true

//COMPARISON
console.log("Comparison");
var comp1 = 4 < 7;
var comp2 = 5 != 8;
var a = 5;
var b = 9;
var comp3 = a > b;
console.log(comp2);

var expression = comp1 && comp2 && comp3; // true & true && false -> false
console.log(`expression: ${expression}`);

var complexExpression = (( 5 < 2 ) && ( 2 >= 3 )); //false &&false
console.log(complexExpression);

//TRUTHY/FALSY values
console.log("TRUTHY/FALSY values");
console.log(true && true);
console.log(false && false);

console.log(!""); //true
var d = true;
console.log(!!d); //true

var firstNum = 12;
var secondNum = "4";
console.log(secondNum < firstNum);//true

console.log("4" < "12"); //false bidejki vo string se gledaat po alfabeta odnosno 4ka e pogolemo od 1 ( se gleda prvata bukva)
console.log("5" < "text");// true bukvite imaat prednost 