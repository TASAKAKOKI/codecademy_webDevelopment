const menu = {
    /*
    - Start by creating an empty menu object.
    - Add a _courses property to your menu object and set its value to an empty object. This property will ultimately contain a mapping between each course and the dishes available to order in that course.
    - Create three properties inside the _courses object called appetizers, mains, and desserts. Each one of these should initialize to an empty array.
    */
    _course: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    /*
    - Create getter and setter methods for the appetizers, mains, and desserts properties.
    */
    get appetizers() {
    },
    set appetizers(appetizerIn) {
      return this._course.appetizers = appetizerIn;
    },
    get mains() {
    },
    set mains(mainIn) {
      return this._course.mains = mainIn;
    },
    get desserts() {
    },
    set desserts(dessertIn) {
      return this._course.desserts = dessertIn;
    },
    /*
    - Inside your menu object, create an empty getter method for the _courses property.
    - Inside the courses getter method, return an object that contains key/value pairs for appetizers, mains, and desserts.
    */
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
    /*
    - Inside the menu object, we are going to create a method called .addDishToCourse() which will be used to add a new dish to the specified course on the menu.
    - The method should take in three parameters: the courseName, the dishName , and the dishPrice.
    - The .addDishToCourse() method should create an object called dish which has a name and price which it gets from the parameters.
    - The method should then push this dish object into the appropriate array in your menu‘s _courses object based on what courseName was passed in.
    */
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
        name:  dishName,
        price: dishPrice
      }
      this['_course'][courseName].push(dish);
      // this._course.courseName = dish;
      return dish;
    },
    /*
    - Now, we’re going to need another function which will allow us to get a random dish from a course on the menu, which will be necessary for generating a random meal.
    - Create a method inside the menu object called .getRandomDishFromCourse(). It will take in one parameter which is the courseName.
    -few steps in getting the .getRandomDishFromCourse() to work.
    1. Retrieve the array of the given course’s dishes from the menu‘s _courses object and store in a variable called dishes.
    2. Generate a random index by multiplying Math.random() by the length of the dishes array (This will guarantee that the random number will be between 0 and the length of the array)
    3. Round that generated number to a whole number by using Math.floor() on the result.
    4. Return the dish located at that index in dishes.
    */
    getRandomDishFromCourse(courseName) {
      const dishes = this._course[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    /*
    - Now that we have a way to get a random dish from a course, we can create a .generateRandomMeal() function which will automatically generate a three-course meal for us. The function doesn’t need to take any parameters.
    1. The function should create an appetizer variable which should be the result of calling the .getRandomDishFromCourse() method when we pass in an appetizers string to it.
    2. Create a main variable and dessert variable the same way you created the appetizer variable, but make sure to pass in the right course type.
    3. Calculates the total price and returns a string that contains the name of each of the dishes and the total price of the meal, formatted as you like.
    */
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const  totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is  ${appetizer.name}, ${main.name}, ${dessert.name}.\nThe Price is ${totalPrice}`; 
     }
};
  
/*
Now that we’ve finished our menu, object, let’s use it to create a menu by adding some appetizers, mains, and desserts with the .addDishToCourse() function. Add at least 3 dishes to each course (or more if you like!).
*/
menu.addDishToCourse('appetizers', 'pudding', 2);
menu.addDishToCourse('appetizers', 'Caesar Salad', 3);
menu.addDishToCourse('appetizers', 'soup', 1);
menu.addDishToCourse('mains', 'steak', 10.5);
menu.addDishToCourse('mains', 'pasta', 8.75);
menu.addDishToCourse('mains', 'fried rice', 7.5);
menu.addDishToCourse('desserts', 'ice cream', 1.5);
menu.addDishToCourse('desserts', 'coffe', 2.5);
menu.addDishToCourse('desserts', 'tea', 2);
// console.log(menu._course);


/*
Once your menu has items inside it, generate a meal by using the .generateRandomMeal() function on your menu, and save it to a variable called meal. Lastly, print out your meal variable to see what meal was generated for you.
*/
let meal = menu.generateRandomMeal();
console.log(meal);