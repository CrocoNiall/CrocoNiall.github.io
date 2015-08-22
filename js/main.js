console.log('Hello Niall');



$(document).ready(function(){

})

function throwRandomCow(speed, distance) {
  //creates two random values(degree of cow, cowIndex) and passes them to the throwCow() function. 
  //takes 2 arguments
  //**speed of throw
  //**distance of throw


  randomCow = Math.floor((Math.random() * 6) + 1);
  randomDegree = Math.floor((Math.random() * 360) + 1);
  throwCow(randomCow, speed, randomDegree, distance);
    console.log(randomCow);
}


function throwCow(cowIndex, speed, degree, distance){
  // takes four arguments:
  // **Cow Index
  // **Speed of throw
  // **Angle of cow
  // **Distance of throw

  //creates three animations, one to throw cow up, one to bring cow down and the other to reset cow to origional position.

  var div
  var cowThrowHeight = '+=' + distance;
  var cowThrowDist = distance;

  switch (cowIndex){
    case 1:
      div = $('#cow1');
        var reset = distance * 2;
        var resetBottom = '-=' + reset;
        var cowThrowDist = '+=' + distance;
      break;
    case 2:
      div = $('#cow2');
        var reset = distance * 2;
        var resetBottom = '-=' + reset;
        var cowThrowDist = '+=' + distance;
      break;
    case 3:
      div = $('#cow3');
        var reset = distance * 2;
        var resetBottom = '-=' + reset;
        var cowThrowDist = '+=' + distance;
      break;
    case 4:
      div = $('#cow4');
      distance = distance - (distance * 2)
        var reset = distance * 2;
        var resetBottom = '-=' + reset;
        var cowThrowDist = '+=' + distance;
      break;
    case 5:
      div = $('#cow5');
      distance = distance - (distance * 2)
        var reset = distance * 2;
        var resetBottom = '-=' + reset;
        var cowThrowDist = '+=' + distance;
      break;
    case 6:
      div = $('#cow6');
      distance = distance - (distance * 2)
        var reset = distance * 2;
        var resetBottom = '-=' + reset;
        var cowThrowDist = '+=' + distance;
      break;
  }


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
