//Set Windowratio
const screenRatio = 4 / 3;

function windowSize() {
  //tested to be 695
  canvasSize = 695
  //resets canvas with new canvassize
  resizeCanvas(canvasSize * screenRatio, canvasSize)
  //Changes the CSS code in the HTML file. Change the left margin to center the canvas
  document.body.style.marginLeft = (windowWidth - width) / 2 + "px"
}
