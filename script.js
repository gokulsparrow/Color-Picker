function myColor() {
  var r = document.getElementById('red').value;
  var g = document.getElementById('green').value;
  var b = document.getElementById('blue').value;
  var color = `rgb(${r}, ${g}, ${b})`;

  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);

  var hexColor = `#${red}${green}${blue}`;

  document.body.style.backgroundColor = color;
  document.getElementById('box').value = color;
  document.getElementById('box2').value = hexColor;

  //rgb to hex coverter
  function rgbToHex(rgb) {
      var hex = Number(rgb).toString(16);
      if(hex.length < 2){
          hex = "0"+hex;
      }
      return hex;
  }
}

var redcolor = document.getElementById('red').addEventListener('input',myColor);
var greencolor = document.getElementById('green').addEventListener('input',myColor);
var bluecolor = document.getElementById('blue').addEventListener('input',myColor);











