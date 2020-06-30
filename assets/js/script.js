function keydownLst(event) {
  const keyPressed = event.code;
  switch (keyPressed) {
    case "ArrowUp":
      return console.log("Up : " + keyPressed);
    case "ArrowDown":
      return console.log("Down : " + keyPressed);
    case "ArrowLeft":
      return console.log("Left : " + keyPressed);
    case "ArrowRight":
      return console.log("Right : " + keyPressed);
    case "Space":
      return console.log("Space : " + keyPressed);
    default:
      return console.log("Others : " + keyPressed);
  }
}

window.addEventListener("keydown", (evt) => keydownLst(evt));
