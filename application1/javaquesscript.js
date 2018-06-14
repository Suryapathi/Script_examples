var userInput = new Array();
var answers =[
 "B","C","A", "C", "D","D","D","D", "C", "A"]

function getScore(){
var score;
var numQuestions=10;

for (var i=0;i<numQuestions;i++){
if (userInput[i]==answers[i]){
score += 1;
}
else{
score += 0;
}

}
}
function returnScore(){
alert("Your score is "+getScore()+"/10");

}
console.log(answers[6]);