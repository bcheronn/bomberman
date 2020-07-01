// Move an object in a direction. If direction is omitted, move at random
function move(object, direction) {
  let exitStatus = 0;
  const objPc = 10; // Pace for next move

  // Get the object to move
  // TODO: test return value
  const elmnt = document.getElementById(object);
  const cmptdStls = window.getComputedStyle(elmnt);

  // Move according to direction
  // TODO : Régler le pas
  let nxtPstn; // Calculated next position
  switch (direction) {
    case "Up":
      nxtPstn = parseInt(cmptdStls.getPropertyValue("top"), 10) - objPc; // TODO: Refactor in a function
      nxtPstn = nxtPstn < 0 ? 0 : nxtPstn;
      elmnt.style.top = nxtPstn + "px";
      break;
    case "Left":
      nxtPstn = parseInt(cmptdStls.getPropertyValue("left"), 10) - objPc; // TODO: Refactor in a function
      nxtPstn = nxtPstn < 0 ? 0 : nxtPstn;
      elmnt.style.left = nxtPstn + "px";
      break;
    case "Down":
      nxtPstn = parseInt(cmptdStls.getPropertyValue("top"), 10) + objPc; // TODO: Refactor in a function
      nxtPstn = nxtPstn > 480 ? 480 : nxtPstn;
      elmnt.style.top = nxtPstn + "px";
      break;
    case "Right":
      nxtPstn = parseInt(cmptdStls.getPropertyValue("left"), 10) + objPc; // TODO: Refactor in a function
      nxtPstn = nxtPstn > 480 ? 480 : nxtPstn;
      elmnt.style.left = nxtPstn + "px";
      break;
    default:
      break;
  }

  return exitStatus;
}

// Check if 2 objects are colliding
// function chckCrsh() {
//   let exitStatus = 0;
//   return exitStatus;
// }

// Drop a bomb
function bomb() {
  let exitStatus = 0;
  return exitStatus;
}

// Listener function for the keydown event
function keydownLstnr(event) {
  let exitStatus = 0;
  // TODO: Check event for undefined or not keyboard
  const keyPressed = event.code; // Key code of the pressed key got through the event

  // Parse the key code to execute proper action
  switch (keyPressed) {
    case "ArrowUp":
      move("player", "Up");
      break;
    case "ArrowLeft":
      move("player", "Left");
      break;
    case "ArrowDown":
      move("player", "Down");
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

// Game initialisation
// TODO: Check window status
// Listen to the keydown event
window.addEventListener("keydown", (evt) => keydownLstnr(evt));
