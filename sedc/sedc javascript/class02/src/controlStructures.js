var score = 75;
if(score > 100){
    //console.log(score>100);
    console.log("Score is greater than 100");
}

console.log(score > 100);

var score2 = 175;
if(score2 > 100){
    //console.log(score>100);
    console.log("Score2 is greater than 100");
}

var points = 51;
if(points > 60){
    console.log("The student passed the exam!");
    console.log(`The score is ${points}`);
} else{
    console.log("The student failed the exam :(");
    
}

console.log("Grades- if-else");
var scoredPoints = 76;
if(scoredPoints >=91){
    console.log("Grade A")
} else if( scoredPoints>=81 && scoredPoints <=90) {
    console.log("Grade B")
} else if ( scoredPoints >=71 && scoredPoints <=80){
    console.log("Grade C")
} else if (scoredPoints >=61 && scoredPoints <=70){
    console.log("Grade D")
} else{
    console.log("You failed")
}