function makeLevel() {
whitePix = [255, 255, 255]

  for (var i = 0; i < level.width; i++) {
    for (var j = 0; j < level.height; j++) {
      pix = [level.get(i, j)[0], level.get(i, j)[1], level.get(i, j)[2]]
      if (pix != whitePix)
        console.log(pix);
    }
  }
}
