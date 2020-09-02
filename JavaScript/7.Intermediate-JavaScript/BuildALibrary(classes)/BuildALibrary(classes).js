/*
- Nice work! If you’ve made it this far, you clearly have a strong understanding of class syntax and inheritance.
- If you would like to continue working on this project, we have listed some avenues to build on your existing progress.
    - [Not gonna do]Add more properties to each class (movieCast, songTitles, etc.)
    - [DONE] Create a CD class that extends Media.
    - [DONE] In .addRating(), make sure input is between 1 and 5.
    - [DONE] Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.
    - [Challenge]Create class called Catalog that holds all of the Media items in our library.
        refer here('https://discuss.codecademy.com/t/project-build-a-library-step-25-how-to-create-a-class-called-catalog/310658/20')
*/

/* *****You should try to creare class called Catalog!!!!***** */

class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    set isCheckedOut(bool) {
      this._isCheckedOut = bool;    
    }
    get ratings() {
      return this._ratings;
    }

    /*
    If the value is true, then change it to false. If the value is false, then change it to true.
    */
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
      // if(this._isCheckedOut) {
      //   this.isCheckedOut = false;
      // } else {
      //   this.isCheckedOut(true);
      // }
    }

    /*
    Use the reduce method to find the sum of the ratings array. Divide this sum by the length of the ratings array, and return the result.
    */
    getAverageRating() {
      const sumRating = this._ratings.reduce((acc,cur) => acc + cur);
      return sumRating / this._ratings.length;    
    }

    /*
    Let’s add a method named addRating that accepts one argument and uses .push() to add it to the end of the ratings array.
    */
    addRating(newRating) {
      if(newRating >= 1 && newRating <= 5) {
        this._ratings.push(newRating);
      } else {
        console.log('Error! You should give rating between 1 to 5');
      }
    }
  }
  
  class Book extends Media {
    constructor(title,author,pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  class Movie extends Media {
    constructor(title,director,runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
  }
  
  class CD extends Media {
    constructor(title,artist,songs) {
      super(title);
      this._artist = artist;
      if(typeof songs !== 'object') {
        console.log('songs must be submitted in array type');
      } else {
        this._songs = songs;
      }
    }
    get artist() {
      return this._artist;
    }
    get songs() {
      return this._songs;
    }
    shuffle() {
      for(let i = this._songs.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [this._songs[i], this._songs[j]] = [this._songs[j], this._songs[i]]; 
      }
    }
  }
  
  const historyOfEverything = new Book('A Short History of Nearly Everything','Bill Bryson', 544);
  console.log(historyOfEverything);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.ratings);
  console.log(historyOfEverything.getAverageRating());
  const speed = new Movie('Speed','Jan de Bont', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.ratings);
  console.log(speed.getAverageRating());
  const myCD = new CD('Hello World Cd','Koki', ['a','b',231]);
  console.log(myCD);
  console.log(myCD.songs);
  myCD.shuffle();
  console.log(myCD.songs);
  // console.log(myCD.shuffle());