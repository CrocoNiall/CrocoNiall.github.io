  console.log('Hello Niall')


$(document).ready(function(){

  //cowGenerator(1500);
  var cover = $('#cover');
  var stage = $('#stage');

  setTimeout(function(){ 
    cover.slideUp('slow');
  }, 300);
  setTimeout(function(){
    stage.slideDown('slow');
  }, 400);

  buttonEvents();
  cowEvents();

  $('#playButton').on('click', function(event){
    toggleSplashScreen();

  });

})
var gamePlay;
var points = 0;
var splashVisible = true;
var currentLevel = 0;
var difficulty = 2000;
var infectionLevel = 100;
var interval;

function toggleSplashScreen() {
  var element = $('#splashScreen');
  if (splashVisible === true){
    element.slideUp('slow');
    splashVisible = false;
  } else if (splashVisible === false ) {
    element.slideDown('slow');
    splashVisible = true; 
  }
}

function toggleSplashInstructions() {
  var element = $('#splashInstructions');
  if (splashVisible === true){
    element.slideUp('slow');
    splashVisible = false;
  } else if (splashVisible === false ) {
    element.slideDown('slow');
    splashVisible = true; 
  }
}

function buttonEvents(){
  console.log('called buttonEvents()')
}

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
      adjustInfection(-20)
      //console.log('you hit a MAD cow'); 
      updateScore(5);
  } if (cowNum.hasClass('cow')) {
      cowNum.css('background-image', 'url(./images/cows/leftHappyShot.png)');
      adjustInfection(50);
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
  }, delay-100);
};

function stopTheCows(){
  clearInterval(gamePlay);

}

function adjustInfection(total) {
  var infectionBar = $('#infectionBar'); 
  infectionLevel += total;

  infectionBar.css('width', infectionLevel);

  if (infectionLevel >= 200) {
    gameOver();
    clearInterval(interval);
  }
  if (infectionLevel <= 0) {
    levelUp();
  }
}

function gameOver() {
  console.log('game over');
  infectionLevel = 100;
  stopTheCows();
}

function levelUp() {
  clearInterval(interval);
  stopTheCows();
  levelStatus = $('#levelIndicator');
  currentLevel++
  difficulty -= 100;
  infectionLevel = 100;
  var infectionIncrament = 1;
  infectionIncrament += 2;

  $('#level').html(currentLevel);
  levelStatus.slideDown('slow');

  interval = setInterval(function(){
    adjustInfection(infectionIncrament);
  }, 1000)
  

  setTimeout(function(){
    levelStatus.slideUp('slow');
  }, 2000)

  setTimeout(function(){
    cowGenerator(difficulty);  
  }, 2000)
   
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


