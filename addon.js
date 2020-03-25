//   draws a grid with equally spaced lines to the canvas
//   accepts 2 paramters; linesX and linesY
//   linesX is the amount of lines wanted on the X-axis
//   linesY is the amount of lines wanted on the Y-axis
//   both values default to 10
//   also takes parameter color, which is the color of the lines in greyscale
//   this defeaults to 255(white)
//   furthermore this also takes parameter weight, which specifies the weight aka thiccness of the lines
p5.prototype.drawGrid = function(linesX = 10, linesY = 10, color = 255, weight = 1) {
  let scaleX = width / linesX;
  let scaleY = height / linesY;
  strokeWeight(weight)
  stroke(color);
  for (let x = 0; x < linesX; x++) {
    line(x * scaleX, 0, x * scaleX, height);
  }
  for (let y = 0; y < linesY; y++) {
    line(0, y * scaleY, width, y * scaleY);
  }
}
