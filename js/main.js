console.log('Hello Niall');



$(document).ready(function(){

})

function throwCow(cow, speed, degree, distance){
  // takes three arguments, speed of throw, angle of rotation of cow and distance of throw

  //creates three animations, one to throw cow up, one to bring cow down and the other to reset cow to origional position. 
  var element = '"#cow' + cow + '"';
  console.log(cow);
  var cowThrowDist = '+=' + distance;
  var cowThrowHeight = '+=' + distance;
  var reset = distance * 2;
  var resetBottom = '-=' + reset;

  //console.log(resetBottom);
  //console.log(cowThrowDist);
  var div = $("#cow1");
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
