/*
We’ll also need to export our Dog class. Navigate to dog.js and assign the Dog class as the value of module.exports.
*/

module.exports = class Dog {
    constructor(name, toothStrength) {
      this.name = name;
      this.toothStrength = toothStrength;
    }
};