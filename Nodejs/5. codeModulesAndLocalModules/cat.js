/*
Inside cat.js assign the Cat class as the value of module.exports.
*/

module.exports = class Cat {
    constructor(name, clawStrength) {
      this.name = name;
      this.clawStrength = clawStrength;
    }
};