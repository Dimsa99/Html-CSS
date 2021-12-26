var a = prompt("Enter side a");
var b = prompt("Enter side b");

console.log(a);
console.log(typeof(a));

 var parsedA = parseInt(a);
 var parsedB = parseInt(b);
 var area = parsedA * parsedB; // mozeme i a*b samo ali ako bese a + b ke bese kao string a ne kako number vaka e po safe
 console.log("The area is: "+ area);
 console.log(area);
 console.log(typeof(area));