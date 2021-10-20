function myColor() {
  var r = document.getElementById('red').value;
  var g = document.getElementById('green').value;
  var b = document.getElementById('blue').value;
  var color = `rgb(${r}, ${g}, ${b})`;

  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);

  var hexColor = `#${red}${green}${blue}`;

  //document.body.style.backgroundColor = color;
  document.getElementById('box').value = color;
  document.getElementById('box2').value = hexColor;

  function myFunctionOne() {
    document.getElementById("myDIV").style.backgroundColor = color;
  }

  //rgb to hex coverter
  function rgbToHex(rgb) {
      var hex = Number(rgb).toString(16);
      if(hex.length < 2){
          hex = "0"+hex;
      }
      return hex;
  }

  myFunctionOne();
}

var redcolor = document.getElementById('red').addEventListener('input',myColor);
var greencolor = document.getElementById('green').addEventListener('input',myColor);
var bluecolor = document.getElementById('blue').addEventListener('input',myColor);

document.getElementById('colorPicker').addEventListener('input', myColor2);






// //


function myColor2() {
  // Get the value return by color picker
  var mycolor = document.getElementById('colorPicker').value;

  // Set the color as background
  document.body.style.backgroundColor = mycolor;
  
}

//

// function myAddFunction() {
//   var a = document.getElementById("list");
//   var li = document.createElement("li");
//   var hexColor = document.getElementById('box2')
//   li.setAttribute('id', hexColor.value);
//   li.appendChild(document.createTextNode(hexColor.value));
//   a.appendChild(li);

//   console.log(a);
// }



// function myRemoveFunction() {
//   var a = document.getElementById("list");
//   var hexColor = document.getElementById('box2')
//   var item = document.getElementById(hexColor.value);
//   a.removeChild(item);
// }

count = 0;

function myAddFunction() {
  var li = document.createElement("li");
  var hexColor = document.getElementById('box2')
  li.setAttribute('id', "li"+count);
  li.setAttribute('class', "styles");
  
  var txtnode = document.createTextNode(hexColor.value)
  li.style.backgroundColor = hexColor.value;
  li.appendChild(txtnode);

  var btn = document.createElement("button");
  btn.innerHTML = "X";
  btn.setAttribute("onClick", 'remove("'+'li'+count+'")')
  btn.setAttribute('class', "close");
  li.appendChild(btn);

  count+=1;

  document.getElementById("list").appendChild(li);

}

function remove(x) {
  var listval = document.getElementById(x);
  document.getElementById("list").removeChild(listval);
}

//

// var div = document.getElementById('component');

// function addB() {
//   var div = document.createElement('div'),
//     button = document.createElement('button');
  
//   //input.placeholder = "More hobbies";
//   button.innerHTML = 'X';
//   // attach onlick event handler to remove button
//   button.onclick = removeB;
  
//   var i = div.appendChild(div);
//   div.appendChild(button);
  
//   console.log(i);
// }

// function removeB() {
//   // remove this button and its input
//   div.removeChild(this.previousElementSibling);
//   div.removeChild(this);
// }


// // attach onclick event handler to add button
// document.getElementById('add').addEventListener('click', addB);
// // attach onclick event handler to 1st remove button
// document.getElementById('remove').addEventListener('click', removeB);


//

function clipPad() {
  /* Get the text field */
  var copyText = document.getElementById("box2");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  
}

function clipPad2() {
  /* Get the text field */
  var copyText = document.getElementById("box");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  
}

//

// var mycolor = document.getElementById('box2').value;


// let pallete = [];

// let addcolor = function(s) {
//   var p = [s[0],s[1],s[2],s[3],s[4],s[5]];

//   pallete.unshift(p);

//   console.log(pallete);
// }

// let removeCard = function(n) {
//   pallete.splice(n, 1);
// }

//



// let addcard = function (s) {
//   var ncol = [s[0],s[1],s[2]], cardAdded = false;

//   for(i = 0;i < pickedcolor.length; i++) {
//     var a = ncol.join(','),
// 				b = pickedcolor[i].join(',');

//         if (a === b) {
//           cardAdded = true;
//         }
//   }

//   if (!cardAdded) {
//     pickedcolor.unshift(ncol);
//   }
//   console.log(b);
// }




// function gotit () {
  
//   var hexColor = document.getElementById('box2');
//   return pickedcolor.splice(0,0,hexColor.value);
// }


// document.getElementById('add').addEventListener('click', gotit);





