//Set Windowratio
const screenRatio = 4/3;

function windowSize() {
  //windowHeight is always -4 to avoid scrollbar.
  //Checks for which side is the defining side for the current window
  if (windowWidth / screenRatio <= windowHeight - 4) {
    canvasSize = windowWidth
    //resets canvas with new canvassize
    resizeCanvas(canvasSize, canvasSize / screenRatio)
    //Changes the CSS code in the HTML file. Sets the left margin to 0
    document.body.style.marginLeft = 0 + "px"
  } else {
    canvasSize = windowHeight - 4
    //resets canvas with new canvassize
    resizeCanvas(canvasSize * screenRatio, canvasSize)
    //Changes the CSS code in the HTML file. Change the left margin to center the canvas
    document.body.style.marginLeft = (windowWidth - width) / 2 + "px"
  }
}

//This function is called everytime the window is resized
function windowResized() {
  //calls function to rezise canvas
  windowSize()
  //sets the game unit
  unit = width/16
}
