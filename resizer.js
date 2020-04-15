const screenRatio = 16 / 9;

function windowSize() {
  if (windowWidth / screenRatio <= windowHeight - 4) {
    canvasSize = windowWidth
    resizeCanvas(canvasSize, canvasSize / screenRatio)
    document.body.style.marginLeft = 0 + "px"
  } else {
    canvasSize = windowHeight - 4
    resizeCanvas(canvasSize * screenRatio, windowHeight - 4)
    document.body.style.marginLeft = (windowWidth - width) / 2 + "px"
  }
}

function windowResized() {
  windowSize()
}

function border(borderColor, borderThickness) {
  noFill()
  stroke(borderColor)
  strokeWeight(borderThickness)
  rectMode(CORNERS)
  rect(0, 0, width, height)
}
