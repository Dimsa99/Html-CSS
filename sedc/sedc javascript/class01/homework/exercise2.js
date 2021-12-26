
var pi= 3.14;
console.log(pi)
console.log(typeof(pi));
var r = prompt("Enter your radius you wanna calculate the area of a circle");
console.log(r);
console.log(typeof(r));
var parsedR = parseInt(r);
var area = (pi * parsedR * parsedR);
console.log("The area of the circle is: " + area);
console.log(typeof(area));


