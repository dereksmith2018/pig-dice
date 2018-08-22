var totalValue = [rollValue1 + rollValue1]
var rollValue1 = Math.floor((Math.random()* 6)+1)
// var rollValue2 = Math.floor((Math.random()* 6)+1)
var clicks = 0

// function roll(rollValue1){
//   roll.clicks += roll.clicks;
//   return ++roll.clicks;
// }
// var userOne = (function(i){
//   return function() {
//     i += rollValue1;
//     return i;
//   }
// });


$(document).ready(function(){
  $("#rollOne").click(function(event) {
    event.preventDefault();
    $("#outputOne").append(rollValue1);
    $("#total").append(clicks);


  });




  // $("#rollTwo").click(function(event) {
  //   event.preventDefault();
  //   $("#outputTwo").text(rollValue2).val();
  //     console.log();



  });
