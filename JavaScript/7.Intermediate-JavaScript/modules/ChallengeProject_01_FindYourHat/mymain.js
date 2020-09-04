const prompt = require('prompt-sync')({sigint: true});
let direction;

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
/*
  In order to start this project, you should have completed lessons at least through Classes in our "Introduction to JavaScript curriculum('https://www.codecademy.com/learn/introduction-to-javascript')".

  In this project, you’ll be building an interactive terminal game with JavaScript classes. Because the goal involves user input, make sure you read "our guide on working with user input in Node.js('https://www.codecademy.com/articles/getting-user-input-in-node-js')". If you complete this project on our platform, you can test and run your code with the command node main.js in our terminal.

  Watch this video to get a sense of what you’ll be building:
  */

  
/*
  Your project is centered on a Field class.
  This and the following tasks will describe how the class should function at a high level, and it will be up to you to figure out the implementation in code.
  As you go, test your code by creating instances of the class and calling its methods.

  The Field constructor should take a two-dimensional array representing the “field” itself.
  A field consists of a grid containing “holes” (O) and one “hat” (^).
  We use a neutral background character (░) to indicate the rest of the field itself.
  The player will begin in the upper-left of the field, and the player’s path is represented by *.
    *░O
    ░O░
    ░^░
  Your class should take a single argument representing the field:
    const myField = new Field([
      ['*', '░', 'O'],
      ['░', 'O', '░'],
      ['░', '^', '░'],
    ]);
*/
class Field {
  constructor(fieldArr){
    this._field = fieldArr;
    this._isWin = 'continue';
    this._curLoca = fieldArr[0][0];
  }
  get field() {
    return this._field;
  }
  
  /*
  Give your Field class a .print() method that prints the current state of the field. You can choose to format this however you want, but it will be much easier to play the game if you print out a string representation of the board instead of the raw array.

  .join() array method is very helpful for formatting and printing arrays as strings.
  */
  print() {
    let arr = [];
    for(let i = 0; i < this._field.length; i++) {
      arr[i] = this._field[i].join('');
    }
    arr = arr.join('\n');
    return arr;
  }

  /*  
  Your game should be playable by users. In order to facilitate this, build out the following behavior:
    When a user runs main.js, they should be prompted for input and be able to indicate which direction they’d like to “move”.
    After entering an instruction, the user should see a printed result of their current field map with the tiles they have visited marked with *. They should be prompted for their next move.
      --> .handleInput()

   This should continue until the user either:
    Wins by finding their hat. 
    Loses by landing on (and falling in) a hole.
    Attempts to move “outside” the field.
    When any of the above occur, let the user know and end the game.
      -->.testStatus()
  */

  /*
  Methods to test whether the current location results in win (user is on the hat) or a loss (user is on a hole or out-of-bounds).
  */
  testStatus(a,b) {
    if((a < 0 || a >= this.field.length) || (b < 0 || b >= this.field[0].length)) {
      console.log('woops. you are out of border');
      this._isWin = false;
      return false;
    } else {
      let curLoca = this.field[a][b];
      let prevField = this._field;
      if(curLoca === fieldCharacter){
        this._isWin = 'continue';
        prevField[a][b] = pathCharacter;
        this._field = prevField;
        return true;
      } else {
        if(curLoca === hat) {
          console.log('You found your Hat!');
          this._isWin = true;
        } else {
          if(curLoca === hole) {
            console.log('You fall in the hole');
          } 
          // else if (curLoca === pathCharacter) {
          //   prevField.field[a][b] = pathCharacter;
          //   this._field = prevField;
          //   console.log('Sorry. In this version, you cant go back.');
          // }
           else {
            console.log('What is going on?');
          }
          this._isWin = false;
        }
        return false;
      }
    }
  }
  
  /*
  A method to handle asking and accepting user input, and updating the current location.
  */
 handleInput() {
   let a = 0, b = 0;
   do {
     console.log(this.print());
     do {
        direction = prompt('Which way? ').toLowerCase();
      } while(direction !=='l' && direction !=='r' && direction !=='u' && direction !=='d');

      switch(direction) {
        case('l'):
          b--;
          break;
        case('r'):
          b++;
          break;
          case('u'):
          a--;
          break;
          case('d'):
          a++;
          break;
          default:
          break;
        }


   } while(this.testStatus(a,b));
  }

  // static generateField(width,height,percentage) {
  //   let generatedArr;
  //   if(typeof width === 'number' && typeof height === 'number' && typeof percentage === 'number') {
  //     let totalArea = width * height;
  //     let numOfHole = Math.floor(totalArea * percentage / 100);
  //     let numOfHat = 1;
  //     if(numOfHole > 0 && numOfHole < totalArea - 2) {
  //       generatedArr = new Array(height);
  //       for(let i = 0; i < width; i++) {
  //         generatedArr[i] = new Array(width);
  //       }
  //       let posY = [], posX =[];
  //       for(let y = 0; y < height; y++) {
  //         posY.push(y);
  //       }
  //       for(let x = 0; x < width; x++) {
  //         posX.push(x);
  //       }
  //       function shuffle(array) {
  //         for (let i = array.length - 1; i > 0; i--) {
  //           const j = Math.floor(Math.random() * (i + 1));
  //           [array[i], array[j]] = [array[j], array[i]];
  //         }
  //         return array;
  //       }
  //       posY = shuffle(posY);
  //       posX = shuffle(posX);
  //       // console.log(posY,posX);
  //       let n = 0;
  //       let usedPosition = {};
  //       let randomY, Y, randomX, X;
  //       while(n < totalArea) {
  //         randomY = Math.floor(Math.random() * posY.length);
  //         Y = posY[randomY];
  //         randomX = Math.floor(Math.random() * posX.length);
  //         X = posX[randomX];
  //         let positionArr = [Y, X];
  //         console.log(positionArr);
  //         console.log(Object.values(usedPosition));
  //         console.log(Object.values(usedPosition).findIndex( ele => positionArr));
  //         while (Object.values(usedPosition).indexOf([positionArr]) != -1) {
  //           console.log('INCLUDED');
  //           randomY = Math.floor(Math.random() * posY.length);
  //           Y = posY[randomY];
  //           randomX = Math.floor(Math.random() * posX.length);
  //           X = posX[randomX];
  //           console.log(`Y is ${Y}, X is ${X} AND IT'S INCLUDED? ${Object.values(usedPosition).includes([Y,X])}`);
  //         }
  //         console.log(`${positionArr} is the ${Object.values(usedPosition).indexOf(positionArr)}th element of the usedPosition`);
  //         console.log(Object.values(usedPosition)[0]);
  //         generatedArr[0][0] = pathCharacter;
  //         usedPosition[n] = positionArr;
  //         if(numOfHat > 0) {
  //           // if(generatedArr[Y][X] !== pathCharacter) {
  //           generatedArr[Y][X] = hat;
  //           numOfHat -= 1;
  //           // }
  //         } else if(numOfHole > 0) {
  //           // if(generatedArr[Y][X] !== pathCharacter &&
  //           //   generatedArr[Y][X] !== hat &&
  //           //   generatedArr[Y][X] !== hole) {
  //           generatedArr[Y][X] = hole;
  //           numOfHole--;
  //           // }
  //         } else {
  //           // if(generatedArr[Y][X] !== pathCharacter &&
  //           // generatedArr[Y][X] !== hat &&
  //           // generatedArr[Y][X] !== hole) {
  //           generatedArr[Y][X] = fieldCharacter;
  //           // }
  //         }
  //         n++;
  //       }
  //     } else {
  //       console.log('given percentage is too small or too big for given field');
  //     } 
  //   } else {
  //     console.log('You should provide all arguments in number type');
  //   }
  //   return generatedArr;
  // }


  // static generateField(width,height,percentage) {
  //   let generatedArr;
  //   if(typeof width === 'number' && typeof height === 'number' && typeof percentage === 'number') {
  //     let totalArea = width * height;
  //     let numOfHole = Math.floor(totalArea * percentage / 100);
  //     let numOfHat = 1;
  //     if(numOfHole > 0 && numOfHole < totalArea - 2) {
  //       generatedArr = new Array(height);
  //       for(let i = 0; i < width; i++) {
  //         generatedArr[i] = new Array(width);
  //       }
  //       let random = number => Math.floor(Math.random() * number);
  //       let n = 0;
  //       while(n < totalArea) {
  //         let posX = random(width);
  //         let posY = random(height);
  //         console.log(posY,posX);
  //         let curEle; = generatedArr[posY][posX];
  //         generatedArr[0][0] = pathCharacter;
  //         generatedArr[0][1] = fieldCharacter;
  //         generatedArr[1][0] = fieldCharacter;
  //         if(numOfHat !== 0) {
  //           curEle = hat;
  //           numOfHat--;
  //         } else if(numOfHole !== 0) {
  //           if(curEle !== hat && curEle !== hole) {
  //             curEle = hole;
  //             numOfHole--;
  //           }
  //         } else{
  //           if(curEle !== hat && curEle !== hole) {
  //             curEle = pathCharacter;
  //           }
  //         }
  //         n++;
  //       }
  //     } else {
  //       console.log('given percentage is too small or too big for given field');
  //     } 
  //   } else {
  //     console.log('You should provide all arguments in number type');
  //   }
  //   return generatedArr;
  // }

  // static generateField(width,height,percentage) {
  //   let generatedArr;
  //   if(typeof width === 'number' && typeof height === 'number' && typeof percentage === 'number') {
  //     let totalArea = width * height;
  //     let numOfHole = Math.floor(totalArea * percentage / 100);
  //     let numOfHat = 1;
  //     if(numOfHole > 0 && numOfHole < totalArea - 2) {
  //       generatedArr = new Array(height);
  //       for(let i = 0; i < width; i++) {
  //         generatedArr[i] = new Array(width);
  //         for(let j = 0; j < height; j++) {
  //           if(i == 0 & j == 0) {
  //             generatedArr[i][j] = pathCharacter;
  //           } else {
  //             let random = Math.floor(Math.random() * (totalArea - 1)) +1;
  //             let element;
  //             if((random > 0 && random <= numOfHole) && numOfHole != 0) {
  //               element = hole;
  //               numOfHole--;
  //             } else if((random == numOfHole + 1) && numOfHat != 0) {
  //               element = hat;
  //               numOfHat--;
  //             } else {
  //               element = fieldCharacter;
  //             }
  //             generatedArr[i][j] = element;
  //           }
  //         }
  //       }
  //     } else {
  //       console.log('given percentage is too small or too big for given field');
  //     } 
  //   } else {
  //     console.log('You should provide all arguments in number type');
  //   }
  //   return generatedArr;
  // }
}

const newFieldArr = Field.generateField(10,10,20);
const newField = new Field(newFieldArr);
newField.handleInput();


