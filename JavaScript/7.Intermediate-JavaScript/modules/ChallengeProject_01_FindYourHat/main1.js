const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(arr = [[]]) {
        this.field = arr;
        this.xPosition = 0;
        this.yPosition = 0;
    }

    isHat() {
        if(this.field[this.yPosition][this.xPosition] == hat) {
            return true;
        }
        return false;
    }
    
    isHole() {
        if(this.field[this.yPosition][this.xPosition] == hole) {
            return true;
        }
        return false;
    }

    isOutOfBound() {
        if(this.xPosition < 0 ||
            this.xPosition > this.field[0].length ||
            this.yPosition < 0 ||
            this.yPosition > this.field[0].length) {
                return true;            
        }
        return false;
    }

    isPlayable() {
        if(this.isOutOfBound()) {
            return false;
        } else if (this.isHat()) {
            return false;
        } else if(this.isHole()) {
            return false;
        } else {
            return true;
        }
    }

    currentLocation() {
        if(this.isPlayable()) {
            this.field[this.yPosition][this.xPosition] = pathCharacter;
        }
    }

    movePosition(move) {
        switch(move) {
            case 'l':
                this.xPosition--;
                this.currentLocation();
                break;
            case 'r':
                this.xPosition++;
                this.currentLocation();
                break;
            case 'u':
                this.yPosition--;
                this.currentLocation();
                break;
            case 'd':
                this.yPosition++;
                this.currentLocation();
                break;
            default:
                console.log('you should give me a direction by\n l or r or u or d');
                this.handleInput();
                break;
        }
    }

    handleInput() {
        this.print();
        const move = prompt('Which way? ').toLowerCase();
        this.movePosition(move);
        if(this.isOutOfBound()) {
            console.log('OMG... You went wrong way');
        } else if(this.isHole()) {
            console.log('Opps. You falls in hole.');
        } else if(this.isHat()) {
            console.log('Congratulations! You found your hat!');
        } else {
            this.handleInput();
        }
    }        

    print() {
        console.log(this.field.map(row => row.join('')).join('\n'));
    }

}

//   static generateField(w,h,p = 0.1) {
//         // this.field[yPosition][xPosition] = ;
//   }
 
  

// const myField = Field.generateField();
const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);

// console.log(myField.field);
myField.handleInput();
