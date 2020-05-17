// Example 26-14: javascript.js

canvas               = O('logo')
context              = canvas.getContext('2d')
context.font         = 'bold italic 97px Italic'
context.shadowBlur=40;
context.shadowColor="green";
context.textBaseline = 'top'


  gradient = context.createLinearGradient(0, 0, 0, 89)
  gradient.addColorStop(0.50, 'red')
  gradient.addColorStop(0.66, 'blue')
  context.fillStyle = gradient
  context.fillText("TechnoGate", 4, 2)
  context.strokeText("TechnoGate", 0, 0)
 

function O(i) { return typeof i == 'object' ? i : document.getElementById(i) }
function S(i) { return O(i).style                                            }
function C(i) { return document.getElementsByClassName(i)                    }
