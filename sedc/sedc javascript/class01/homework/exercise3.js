// var phonePrice = prompt("Enter your phone price you want to buy:  $");
// var parsedPhonePrice = parseInt(phonePrice);
// console.log(parsedPhonePrice)
// console.log(typeof(parsedPhonePrice));

// var numberOfPhones = 30;
// console.log(numberOfPhones)
// console.log(typeof(numberOfPhones));

// var taxRate = prompt("Calculate the price with the tax rate: ");
// var parsedTaxRate = parseInt(taxRate);
// console.log(parsedTaxRate);
// console.log(typeof(parsedTaxRate));

// var taxRateCalculation = phonePrice % taxRate; 
// console.log(taxRateCalculation)
// console.log(typeof(taxRateCalculation));

// var calculatePhone = taxRateCalculation * numberOfPhones;
// console.log("This is the price of 30 phones with your price within the taxes all calculated: "+calculatePhone);
// console.log(typeof(calculatePhone));

var phonePrice = prompt("Enter your phone price you want: ");
var parsedPhonePrice = parseInt(phonePrice);
console.log(parsedPhonePrice);
console.log(typeof(parsedPhonePrice));

var numberOfPhones = 30;
console.log(numberOfPhones);
console.log(typeof(numberOfPhones));

var calculateWithoutTaxes = phonePrice * numberOfPhones;
console.log("This is the price without taxes: "+calculateWithoutTaxes);
console.log(typeof(calculateWithoutTaxes));

var taxRate = prompt("Calculate the price with your tax rate: ")
var parsedTaxRate = parseInt(taxRate);
console.log(parsedTaxRate);
console.log(typeof(parsedTaxRate));

var taxRateCalculation = (parsedPhonePrice * taxRate) /100 ;
console.log(taxRateCalculation);
console.log(typeof(taxRateCalculation));

var taxRateCalculationFinal = calculateWithoutTaxes + (taxRateCalculation * 30);
console.log("This is the price with taxes: "+ taxRateCalculationFinal);
console.log(typeof(taxRateCalculationFinal));



