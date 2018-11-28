// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var Counter =  Math.floor(Math.random()*3);
// var userChoice = ["Rock","Paper","Scissors"];
var Choice=["Rock","Paper","Scissors"];

// var computerChoice=Choice[Counter];
// console.log(Counter)
// console.log(computerChoice)

//if(Petty<1/3){
//    console.log("computer Wins")
//$()
  











$("#shoot").click(function(){
    var userChoice = $("#input").val();
    $("#userChoice").text(userChoice);
    var computerChoice=Choice[Counter];
console.log(Counter)
console.log(computerChoice)
});