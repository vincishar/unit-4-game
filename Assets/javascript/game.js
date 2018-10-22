$(document).ready(function() {

var wins = 0; 
document.getElementById('wincount').innerHTML = wins; 
var losses = 0; 
document.getElementById('losses').innerHTML = losses; 
var targetscore = Math.floor(Math.random()*101+20);; 
document.getElementById('targetscore').innerHTML = targetscore; 
var totalscore = 0;
document.getElementById('totalscore').innerHTML = totalscore;
var userTotalScore = 0

var random = Math.floor(Math.random()*101+20);

var winCount = 0; 
var lossesCount = 0; 
var userTotalScore = 0;

$("#numberToGet").text(random);   
   

var num1 = Math.floor(Math.random()*14+2);
var num2 = Math.floor(Math.random()*14+2);
var num3 = Math.floor(Math.random()*14+2);
var num4 = Math.floor(Math.random()*14+2);

$('#numberWins').text(wins);
$('#numberLosses').text(losses);

// Functions
function reset() {
    random = Math.floor(Math.random()*102+19);
    console.log(random);
    $("#numberToGet").text(random);
    var image1 = Math.floor(Math.random()*12+4);
    var image2 = Math.floor(Math.random()*12+4);
    var image3 = Math.floor(Math.random()*12+4);
    var image4 = Math.floor(Math.random()*12+4);
    userTotal = 0;
    $("#score").text(userTotal);
    $('#finalTotal').text(userTotal);
}

function winner() {
    alert("You Won!!")
    winsCount++; 
    computerChoice = Math.floor(Math.random()*14+2);
    $("#wincount").text(winCount);
    reset();
}

function loser() {
    alert("You Lose!!");{
    lossesCount++;  
    computerChoice = Math.floor(Math.random()*14+2);
    $("#losses").text(lossesCount);
    reset();
}
}
$("#image1").on("click", function() {
    userTotalScore = userTotalScore + num1;
    console.log("New userTotal=" + userTotalScore);
    $("#totalscore").text(userTotalScore); 
    

    if (userTotalScore === random) {
        winner()
    }

    else if (userTotalScore > random) {
        loser()
    } 
})

$("#image2").on("click", function() {
    userTotalScore = userTotalScore + num2;
    console.log("New userTotal=" + userTotalScore);
    $("#totalscore").text(userTotalScore);

    if (userTotalScore === random) {
        winner()
    }

    else if (userTotalScore > random) {
        loser()
    } 
})  

$("#image3").on("click", function() {
    userTotalScore = userTotalScore + num3;
    console.log("New userTotal=" + userTotalScore);
    $("#totalscore").text(userTotalScore);

    if (userTotalScore === random) {
        winner()
    }

    else if (userTotalScore > random) {
        loser()
    } 
})

$("#image4").on("click", function() {
    userTotalScore = userTotalScore + num4;
    console.log("New userTotal=" + userTotalScore);
    $("#totalscore").text(userTotalScore);

    if (userTotalScore === random) {
        winner()
    }

    else if (userTotalScore > random) {
        loser()
    } 
})


});