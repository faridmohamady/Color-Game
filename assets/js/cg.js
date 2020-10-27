var numSquares = 6;
var colors = [];
var colorPicked;

var square = document.getElementsByClassName('square')
var colorDisplay = document.getElementById('colorDisplay')
var message = document.getElementById('message')
var h1 = document.querySelector('h1')
var resetB = document.querySelector('#reset')
var modeButton = document.querySelectorAll('.mode')

init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){
  for (var i = 0; i < modeButton.length; i++) {
    modeButton[i].addEventListener('click', function(){
       modeButton[0].classList.remove('selected');
       modeButton[1].classList.remove('selected');
       this.classList.add('selected');
       this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
       reset();
    })
  }
}

function setupSquares(){
  //assigning a color to squares from colors array
  for (var i = 0; i < square.length; i++) {
    square[i].addEventListener('click', function(){
      var clickedColor = this.style.backgroundColor;
      //checking if the clicked color is the coorect one if so make all the same color
      if (clickedColor === colorPicked) {
        message.textContent = 'Correct';
        resetB.textContent = 'Play Again?'
        changeColors(colorPicked);
        h1.style.backgroundColor = colorPicked
      }
      else {
        // if not correct changing the color same as body
        this.style.backgroundColor = "#232323";
        message.textContent = 'Try Again';
      }
    })
  }
}

function reset(){
  colors = generateRandomColors(numSquares);
  colorPicked = colorPicker();
  colorDisplay.textContent = colorPicked;
  message.textContent = '';
  resetB.textContent = 'New Colors';
  for (var i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.display = 'block'
      square[i].style.backgroundColor = colors[i];
    }
    else {
      square[i].style.display = 'none'
    }
  }
  h1.style.backgroundColor = 'steelblue'
}
resetB.addEventListener('click', function(){
  reset();
})


  //changing all square colors to the correct one
function changeColors(color){
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = color;
  }
}
//pick the correct color
function colorPicker(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
//generating random colors for the squares
function generateRandomColors(num){
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}
//generating random colors
function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ', ' + g + ', ' + b + ')';
}
