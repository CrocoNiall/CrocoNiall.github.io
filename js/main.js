//---------------------------------
//  Niall Wallace - 24/08/15
//  GA London - WDI15
//--------------------------------- 

//init local variables 
var gamePlay;
var points = 0;
var splashVisible = true;
var currentLevel = 0;
var difficulty = 2000;
var infectionLevel = 100;
var interval;
var previousCow = 0;
var sounds = true;
var gameOverVisible = false;

$(document).ready(function(){
  var cover = $('#cover');
  var stage = $('#stage');
  setTimeout(function(){ 
    cover.slideUp('slow');
      }, 2000);

  setTimeout(function(){
    stage.slideDown('slow');
      }, 2500);

  buttonEvents();
  cowEvents();
})

function toggleSplashScreen() {
//Renders the SplashScreen if unvisible/hides the SplashScreen if visible.

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
//Renders the Splash element -instructions if unvisible/hides the instructions if visible. 

  var element = $('#splashInstructions');

  if (splashVisible === true){
    element.slideUp('slow');
    splashVisible = false;

  } else if (splashVisible === false ) {
    element.slideDown('slow');
    splashVisible = true; 

  }
}

function toggleGameOver() {
//Renders the GameOver element if unvisible/hides the SplashScreen in visible.
//Amends #finalPoints HTML to display ending score.

  var element = $('#gameOver');
  if (gameOverVisible === true){
    element.slideUp('slow');
    gameOverVisible = false;
  } else if (gameOverVisible === false){
    element.slideDown('slow');
    gameOverVisible = true;
    $('#finalPoints').html(points);
  }
}

function buttonEvents(){
//inits event listeners for buttons and audio.

  $('#stage').on('click', function(event){
    startSound('audio/gunShot.mp3' , 'shot');
  })

  $('#menuButton').on('click', function(event){
    resetGame();
  })

  $('#audio').on('click', function(event){
    var audioIcon = $('#audioStatus');
    if (sounds === true){
      sounds = false;
      audioIcon.attr('src', 'images/soundOff.png');
    } else if (sounds === false){
      sounds = true;
      audioIcon.attr('src', 'images/soundOn.png');
    }
  })




  $('#playButton').on('click', function(event){
    toggleSplashScreen();
    currentLevel = 0;
    levelUp();
    startSound('audio/reLoad.mp3' , 'reload');

  });
}

function resetGame() {
//resets game and reassigns var.

    toggleGameOver();
    currentLevel = 0;  
    points = 0;
    infectionLevel = 100;
    clearInterval(interval);
    toggleSplashScreen(); 
}

function cowEvents() {
//set up event listeners for cow divs. called shotCow() function after upon event.

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
//changes the image of 'cow' to 'shot cow' depending on the class of the images. 
//calls the adjustInfection() function with the approprite arguments.

  if(cowNum.hasClass('madCow')) {
      cowNum.css('background-image', 'url(./images/cows/rightMadShot.png)');
      adjustInfection(-20)
      startSound('audio/cow2.wav', 'cowSound2');
      //console.log('you hit a MAD cow'); 
      updateScore(5);
  } if (cowNum.hasClass('cow')) {
      cowNum.css('background-image', 'url(./images/cows/leftHappyShot.png)');
      adjustInfection(50);
      startSound('audio/moo1.wav', 'cowSound1');
      //console.log('you hit a HAPPY cow'); 

  }   
}

function resetShotCow(cowNum) {
//resets image of cow from 'shot cow' to 'cow'
  
  if(cowNum.hasClass('madCow')) {
      cowNum.css('background-image', 'url(./images/cows/rightMad.png)');
      
      //console.log('reset Mad cow'); 
  } if (cowNum.hasClass('cow')) {
      cowNum.css('background-image', 'url(./images/cows/leftHappy.png)');
      
      //console.log('reset HAPPY Cow'); 
  }   
}

function updateScore(quantity) {
// updates the score variable dependin on the paramiter. 
//updates HTML to represent the value.

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

// function cowSound() {
//   cow2Sound = setInterval(function(){
//     startSound('audio/cow2.wav', 'cowSound2');
//     }, 2000)

//   cow1Sound = setInterval(function(){
//       startSound('audio/cow3.wav', 'cowSound1');
//     }, 3500)

//   cow2Sound = setInterval(function(){
//       startSound('audio/moo1.wav', 'cowSound3');

//     }, 7000)
// } 
  

function stopTheCows(){
//disables interval that drives the throwRandomCow() function. 

  clearInterval(gamePlay);
}

function adjustInfection(total) {
//ammends css atribure of '#infectionBar' to represent the infectionLevel variable.
//calculates if gameOver() or levelUp() critera's have been met.

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
//stops the incrament of $infectionLevel.
//resets $infectionLevel back to default.
//displays gameOver onscreen element.

  clearInterval(interval);
  infectionLevel = 100;
  stopTheCows();
  toggleGameOver();
}

function levelUp() {
//brings current level to a halt.
//incraments $currentLevel var.
//resets $infectionLevel to default.
//increases $difficulty.


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
    startSound('audio/reLoad.mp3' , 'reload');
   
}

function throwRandomCow(speed, distance) {
  //creates two random values(degree of cow, cowIndex) and passes them to the throwCow() function. 
  //takes 2 arguments
  //**speed of throw
  //**distance of throw

 
  randomCow = Math.floor((Math.random() * 6) + 1);
  randomDegree = Math.floor((Math.random() * 360) + 1);
    if (previousCow != randomCow) {
  throwCow(randomCow, speed, randomDegree, distance);
  previousCow = randomCow;
  }

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

//animates 'cow' elements

  div.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
  div.animate({
    left: cowThrowDist, 
    bottom: "+=400" }, speed, 'linear');

    div.animate({
    left: cowThrowDist,
    bottom: "-=400" },speed, 'linear');

//resets image back to origional position

    div.animate({
      left: resetBottom }, 1, 'linear');
} 

function startSound(url, ID){
//Sound manager core code.  

soundManager.setup({
  url: '/js/soundmanager/swf',
  onready: function() {

    var mySound = soundManager.createSound({
      id: ID,
      url: url 
    });
    if (sounds === true){
    mySound.play(); 
  }
  },
  ontimeout: function() {} });

}


