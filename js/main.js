console.log('Hello Niall');



$(document).ready(function(){

})

function throwRandomCow() {

}


function throwCow(cowIndex, speed, degree, distance){
  // takes three arguments, speed of throw, angle of rotation of cow and distance of throw

  //creates three animations, one to throw cow up, one to bring cow down and the other to reset cow to origional position.
  var div

  var cowThrowHeight = '+=' + distance;
  var reset = distance * 2;
  var resetBottom = '-=' + reset;
  var cowThrowDist = distance;

  //define cow to perform function on 
  switch (cowIndex){
    case 1:
      div = $('#cow1');
      break;
    case 2:
      div = $('#cow2');
      break;
    case 3:
      div = $('#cow3');
      break;
    case 4:
      div = $('#cow4');
      distance = distance - (distance * 2)
      break;
    case 5:
      div = $('#cow5');
      distance = distance - (distance * 2)
      break;
    case 6:
      div = $('#cow6');
      distance = distance - (distance * 2)
      break;
  }


  var cowThrowDist = '+=' + distance;

  div.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
  div.animate({
    left: cowThrowDist, 
    bottom: "+=400" }, speed, 'linear');

    div.animate({
    left: cowThrowDist,
    bottom: "-=400" },speed, 'linear');

    div.animate({
      left: resetBottom }, 1, 'linear');

} 
