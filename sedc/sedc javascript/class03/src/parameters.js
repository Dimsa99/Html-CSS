function logNumbers(a,b,c){
    console.log(`a: ${a}`);
    console.log(`b: ${b}`);
    console.log(`c: ${c}`);
}

logNumbers(2,5,6);
logNumbers();
logNumbers(88); // a = 88; b=undefined, c=undefined;
logNumbers(undefined, undefined, 55);
logNumbers(55,0);
//logNumbers(3,,4); // syntax error
logNumbers(3, "awdasd", 5);

//default values
function logData(data1, data2, data3 ="test"){
    console.log(`data1: ${data1}`);
    console.log(`data2: ${data2}`);
    console.log(`data3: ${data3}`);
}
logData("tekst1", "tekst2","tekst3");
logData(2,3);
logData(1);