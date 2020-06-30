// Move an object in a direction
function move(object, direction) {
  return null;
}
// Listener function for the keydown event
function keydownLstnr(event) {
  let exitStatus = 0;
  //TODO: Check event for undefined or not keyboard
  const keyPressed = event.code; // Key code of the pressed key got through the event

  // Parse the key code to execute proper action
  switch (keyPressed) {
    case "ArrowUp":
      move("player", "Up");
      break;
    case "ArrowDown":
      move("player", "Down");
      break;
    case "ArrowLeft":
      move("player", "Left");
      break;
    case "ArrowRight":
      move("player", "Right");
      break;
    case "Space":
      bomb();
      break;
    default:
      break;
  }
  return exitStatus;
}

// Listen to the keydown event
//TODO: Check window status
window.addEventListener("keydown", (evt) => keydownLstnr(evt));
