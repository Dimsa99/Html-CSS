//  function celciusToFahrenheit(){
//      let temp = +prompt("Please enter Celcius to get the Fahrenheit value: ");
//      let celToFahr = temp * 1.8 + 32;
//     console.log(celToFahr);
//  }

//     function fahrenheitToCelcius(){
//     let temp = +prompt("Please enter Fahrenheit value to get the Celcius version");
//      let fahrToCel =(5/9) * (temp - 32);
//      console.log(fahrToCel);
//  }
//  celciusToFahrenheit();
//  fahrenheitToCelcius();


let vnes = +prompt("For Celsius put 1, for Fahrenheit put 2") 
let broj = +prompt("Put number for convert");
let celsius = (broj*1.82) +32;
let fah = (5/9) * (broj - 32);
function presmetka(){
    if(vnes == 1){
        console.log(celsius);
    } else if (vnes ==2){
        console.log(fah);
    } else{
        console.log("Invalid number");
    }
}
presmetka();

//let vnes2 = +prompt("Vnesi \"c\" za Celcius a vnesi \" f \" za Fahrenheit da pretvoris ");
//let broj2 = +prompt("Vnesi broj za pretvaranje");

// let conversionType = prompt("Choose a conversion");
// if(conversionType == "C"){
//     celciusToFahrenheit();
// } else if (conversionType == "F"){
//     fahrenheitToCelcius();
// } else {
//     console.log("No conversion is chosen.")
// }
// function celsiusToFahrenheit(valueCelsius, conversionRate){
//     valueCelsius = parseFloat(prompt("Enter the value in Celsius"));
//     conversionRate = 1.8;
//     valueFahrenheit = (valueCelsius * conversionRate) + 32;
//     console.log(valueFahrenheit);
// }
// function fahrenheitToCelsius(valueFahrenheit, conversionRate2){
//     valueFahrenheit = parseFloat(prompt("Enter the value in Fahrenheit");
//     conversionRate2= (5/9);
//     valueCelsius = conversionrate2 * (valueFahrenheit - 32)
//     console.log(valueCelsius);
// }