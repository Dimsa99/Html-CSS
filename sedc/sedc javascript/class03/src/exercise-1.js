var request = prompt("Hey there, how much money you got to spend?");
console.log(`He/She has: ${request}$`);
console.log(typeof(request));

var money = +request;
console.log(`He/She has: ${request}$`);
console.log(typeof(money));

if(money >=0 && money < 10){
   alert("You don't have much money sadly, you should spend less and save more cash :)")
    console.log("You have: " +money);
} else if ( money >= 10 && money <30){
    alert("That's not too bad you can atleast get a drink or a small meal");
    console.log("You have: "+money);
} else {
    alert("You are rich you can get whatever you want");
    console.log(`You have: ${money}$`);
}