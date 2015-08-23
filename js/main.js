console.log('Hello Niall');



$(document).ready(function(){

  cowEvents();
  cowGenerator(1500);

})
var gamePlay;
var points = 0;



function cowEvents() {
  $('#cow1').click(function(event) {  
    var cow = $('#cow1');
    shotCow(cow);
    });

  $('#cow2').click(function(event) { 
    var cow = $('#cow2');
    shotCow(cow); });

  $('#cow3').click(function(event) {  
    var cow = $('#cow3');
    shotCow(cow);

  });
  $('#cow4').click(function(event) {  
    var cow = $('#cow4');
    shotCow(cow);

  });
  $('#cow5').click(function(event) { 
    var cow = $('#cow5');
    shotCow(cow);
  });
  $('#cow6').click(function(event) { 
    var cow = $('#cow6');
    shotCow(cow);
  });

}

function shotCow(cowNum) {
  if(cowNum.hasClass('madCow')) {
      cowNum.css('background-image', 'url(./images/cows/rightMadShot.png)');
      //console.log('you hit a MAD cow'); 
      updateScore(5);
  } if (cowNum.hasClass('cow')) {
      cowNum.css('background-image', 'url(./images/cows/leftHappyShot.png)');
      //console.log('you hit a HAPPY cow'); 

  }   
}

function resetShotCow(cowNum) {
  if(cowNum.hasClass('madCow')) {
      cowNum.css('background-image', 'url(./images/cows/rightMad.png)');
      //console.log('reset Mad cow'); 
  } if (cowNum.hasClass('cow')) {
      cowNum.css('background-image', 'url(./images/cows/leftHappy.png)');
      //console.log('reset HAPPY Cow'); 
  }   
}

function updateScore(quantity) {
  points = points + quantity;
  $('#points').html(points);
}

function cowGenerator(delay) {
//takes one argument
//**time delay between cowThrow e.g 2000
//initialises game play
  gamePlay = setInterval(function() {
    throwRandomCow(delay, 200);
  }, delay);
};

function stopTheCows(){
  clearInterval(gamePlay);

}



function throwRandomCow(speed, distance) {
  //creates two random values(degree of cow, cowIndex) and passes them to the throwCow() function. 
  //takes 2 arguments
  //**speed of throw
  //**distance of throw


  randomCow = Math.floor((Math.random() * 6) + 1);
  randomDegree = Math.floor((Math.random() * 360) + 1);
  throwCow(randomCow, speed, randomDegree, distance);

}


function throwCow(cowIndex, speed, degree, distance){
  // takes four arguments:
  // **Cow Index
  // **Speed of throw
  // **Angle of cow
  // **Distance of throw

  //creates three animations, one to throw cow up, one to bring cow down and the other to reset cow to origional position.

  var div;
  var cowThrowHeight = '+=' + distance;
  var cowThrowDist = distance;

  switch (cowIndex){
    case 1:
      div = $('#cow1');
        var reset = distance * 2;
        var resetBottom = '-=' + reset;
        var cowThrowDist = '+=' + distance;
          resetShotCow(div);
      break;
    case 2:
      div = $('#cow2');
        var reset = distance * 2;
        var resetBottom = '-=' + reset;
        var cowThrowDist = '+=' + distance;
          resetShotCow(div);
      break;
    case 3:
      div = $('#cow3');
        var reset = distance * 2;
        var resetBottom = '-=' + reset;
        var cowThrowDist = '+=' + distance;
          resetShotCow(div);
      break;
    case 4:
      div = $('#cow4');
      distance = distance - (distance * 2)
        var reset = distance * 2;
        var resetBottom = '-=' + reset;
        var cowThrowDist = '+=' + distance;
          resetShotCow(div);
      break;
    case 5:
      div = $('#cow5');
      distance = distance - (distance * 2)
        var reset = distance * 2;
        var resetBottom = '-=' + reset;
        var cowThrowDist = '+=' + distance;
          resetShotCow(div);
      break;
    case 6:
      div = $('#cow6');
      distance = distance - (distance * 2)
        var reset = distance * 2;
        var resetBottom = '-=' + reset;
        var cowThrowDist = '+=' + distance;
          resetShotCow(div);
      break;
  }

  //resetShotCow(div);
  //setTimeout(resetShotCow(div), (speed * 2));
  div.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
  div.animate({
    left: cowThrowDist, 
    bottom: "+=400" }, speed, 'linear');

    div.animate({
    left: cowThrowDist,
    bottom: "-=400" },speed, 'linear');

    div.animate({
      left: resetBottom }, 1, 'linear');

   // resetShotCow(div);

   // 
} 


