
var rollValue = Math.floor((Math.random()* 6)+1)
var totalValue1 = rollValue + rollValue
var totalValue2 = rollValue + rollValue


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
    $("#outputOne").append(rollValue);
    $("#totalOne").append(totalValue1);




  });




  $("#rollTwo").click(function(event) {
    event.preventDefault();

      $("#outputTwo").append(rollValue);
      $("#totalTwo").append(totalValue2);



  });
});
