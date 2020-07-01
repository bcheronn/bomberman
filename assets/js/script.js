// Move an object in a direction. If direction is omitted, move at random
// TODO: Random moves
function move(object, direction) {
  let exitStatus = 0;
  const objPc = 10; // Pace for next move

  // Get the object to move
  // TODO: test return value
  const cmptdStls = window.getComputedStyle(object);

  // Move according to direction
  let nxtPstn; // Calculated next position
  switch (direction) {
    case "Up":
      nxtPstn = parseInt(cmptdStls.getPropertyValue("top"), 10) - objPc; // TODO: Refactor in a function
      nxtPstn = nxtPstn < 0 ? 0 : nxtPstn;
      object.style.top = nxtPstn + "px";
      break;
    case "Left":
      nxtPstn = parseInt(cmptdStls.getPropertyValue("left"), 10) - objPc; // TODO: Refactor in a function
      nxtPstn = nxtPstn < 0 ? 0 : nxtPstn;
      object.style.left = nxtPstn + "px";
      break;
    case "Down":
      nxtPstn = parseInt(cmptdStls.getPropertyValue("top"), 10) + objPc; // TODO: Refactor in a function
      nxtPstn = nxtPstn > 480 ? 480 : nxtPstn;
      object.style.top = nxtPstn + "px";
      break;
    case "Right":
      nxtPstn = parseInt(cmptdStls.getPropertyValue("left"), 10) + objPc; // TODO: Refactor in a function
      nxtPstn = nxtPstn > 480 ? 480 : nxtPstn;
      object.style.left = nxtPstn + "px";
      break;
    default:
      break;
  }

  return exitStatus;
}

function expldBmb() {
  //Explosion animation
}

// Check if 2 objects are colliding
// function chckCrsh() {
//   let exitStatus = 0;
//   return exitStatus;
// }

// Drop a bomb at the position of the object
function bomb(object) {
  let exitStatus = 0;

  const bmb = document.getElementById("bomb"); // Get the bomb object
  const bmbrStl = window.getComputedStyle(object); // Get the bomber styles

  // Drop (position and show) the bomb
  bmb.style.top = bmbrStl.getPropertyValue("top");
  bmb.style.left = bmbrStl.getPropertyValue("left");
  bmb.style.display = "block";

  // Trigger the bomb
  window.setTimeout(() => expldBmb(), "3000");

  return exitStatus;
}

// Listener function for the keydown event
function keydownLstnr(event) {
  let exitStatus = 0;
  // TODO: Check event for undefined or not keyboard
  const keyPressed = event.code; // Key code of the pressed key got through the event

  // Parse the key code to execute proper action
  // TODO: Use an array to map keys and directions
  switch (keyPressed) {
    case "ArrowUp":
      move(document.getElementById("bomber"), "Up");
      break;
    case "ArrowLeft":
      move(document.getElementById("bomber"), "Left");
      break;
    case "ArrowDown":
      move(document.getElementById("bomber"), "Down");
      break;
    case "ArrowRight":
      move(document.getElementById("bomber"), "Right");
      break;
    case "Space":
      bomb(document.getElementById("bomber"));
      break;
    default:
      // Do nothing
      break;
  }
  return exitStatus;
}

// Animate the opponents
function anmtOppnnts() {
  let exitStatus = 0;

  let oppnnts = document.getElementsByClassName("opponent");

  for (let i = 0; i < oppnnts.length; i++) {
    // TODO: Randomise the move
    switch (Math.floor(Math.random() * 4)) {
      case 0:
        move(oppnnts[i], "Up");
        break;
      case 1:
        move(oppnnts[i], "Left");
        break;
      case 2:
        move(oppnnts[i], "Down");
        break;
      case 3:
        move(oppnnts[i], "Right");
        break;
      default:
        // Do nothing
        break;
    }
  }
  return exitStatus;
}

// Game initialisation
// TODO: Check window status
// Listen to the keydown event
window.addEventListener("keydown", (evt) => keydownLstnr(evt));
window.setInterval(() => anmtOppnnts(), "500");
