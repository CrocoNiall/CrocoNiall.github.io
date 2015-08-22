console.log('Hello Niall');



$(document).ready(function(){
  



 
})
function throwCowUp(speed){
    var div = $("#cow1");
    div.animate({
      left: "+=300", 
      bottom: "+=350",
      rotate: "180"}, 1000, 'linear');

    throwCowDown();
   } 

function throwCowDown(){
    var div = $("#cow1");
    div.animate({
      left: "+=300", 
      bottom: "-=350",
      rotate: "180"},1000, 'linear');

   } 
