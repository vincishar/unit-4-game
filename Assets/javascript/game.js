$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
       // Adding random number to the randomNumber id in the html doc  

    $('#randomNumber').text(Random);{
    var num1= Math.floor(Math.random()*10+2)
    var num2= Math.floor(Math.random()*10+2)
    var num3= Math.floor(Math.random()*10+2)
    var num4= Math.floor(Math.random()*10+2)
    userTotal= 0;
    $('#finalTotal').text(userTotal);
    }

    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);  

  
  //resets the game
  function reset (){
        Random=Math.floor(Math.random()*101+20);
        console.log(Random);
        $("#numberToGet").text(random);
        num1= Math.floor(Math.random()*10+2);
        num2= Math.floor(Math.random()*10+2);
        num3= Math.floor(Math.random()*10+2);
        num4= Math.floor(Math.random()*10+2);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 

  function yay(){
  alert("Congratulations you won!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  
  function loser(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset();
  }
  // Click Functions
    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
           
          if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })  
    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
  
            if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          }
    });   
  }); 