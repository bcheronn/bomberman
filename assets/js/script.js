// Move an object in a direction. If direction is omitted, move at random
function move(object, direction) {
  let exitStatus = 0;

  // Get the object to move
  // TODO: test return value
  const elmnt = document.getElementById("player");
  const cmptdStls = window.getComputedStyle(elmnt);
  const tp = cmptdStls.getPropertyValue("top");
  const lft = cmptdStls.getPropertyValue("left");
  const bttm = cmptdStls.getPropertyValue("bottom");
  const rght = cmptdStls.getPropertyValue("right");

  console.log("Before : T" + tp + " / L" + lft + " / B" + bttm + " / R" + rght);

  switch (direction) {
    case "Up":
      elmnt.style.top = "0px";
      console.log(cmptdStls.getPropertyValue("top"));
      break;
    case "Left":
      elmnt.style.left = "0px";
      console.log(cmptdStls.getPropertyValue("left"));
      break;
    case "Down":
      elmnt.style.top = "480px";
      console.log(cmptdStls.getPropertyValue("bottom"));
      break;
    case "Right":
      elmnt.style.left = "480px";
      console.log(cmptdStls.getPropertyValue("right"));
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
