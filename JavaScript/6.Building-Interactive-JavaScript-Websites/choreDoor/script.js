const doorImage1 = document.querySelector('#door1');
const doorImage2 = document.querySelector('#door2');
const doorImage3 = document.querySelector('#door3');
const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let openDoor1, openDoor2, openDoor3;
let numClosedDoors = 3;
const startButton = document.querySelector('#start');
const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    console.log(choreDoor);
    switch(choreDoor) {
        case(0):
            openDoor1 = botDoorPath;
            openDoor2 = beachDoorPath;
            openDoor3 = spaceDoorPath;
            break;
        case(1):
            openDoor2 = botDoorPath;
            openDoor3 = beachDoorPath;
            openDoor1 = spaceDoorPath;
            break;
        case(2):
            openDoor3 = botDoorPath;
            openDoor1 = beachDoorPath;
            openDoor2 = spaceDoorPath;
            break;
        default:
            break;
    }
    
};
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
let currentPlaying = true;
const isBot = (door) => {
  if(door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
};
const isClicked = (door) => {
  if(door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
};
const playDoor = (door) => {
    numClosedDoors -= 1;
    if(numClosedDoors === 0) {
      gameOver('win');
    } else if(isBot(door)) {
      gameOver('lost');
    }
};
doorImage1.onclick = () => {
  if(!isClicked(doorImage1) && currentPlaying) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};
doorImage2.onclick = () => {
  if(!isClicked(doorImage2) && currentPlaying) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};
doorImage3.onclick = () => {
  if(!isClicked(doorImage3) && currentPlaying) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};
startButton.onclick = () => {
  if(!currentPlaying) {
    startRound();
  }
};
const gameOver = (status) => {
  if(status == 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentPlaying = false;
};
const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentPlaying = true;
  randomChoreDoorGenerator(); 
};

startRound();