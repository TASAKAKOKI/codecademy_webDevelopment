//https://www.codecademy.com/paths/web-development/tracks/webdev-intermediate-javascript/modules/learn-javascript-classes/projects/school-catalog

/*
version1 without catalog.
*/


/*
Create ParentSchool Class
    1. Let’s start by making a parent class for Primary, Middle, and High classes. Create an empty class named School.

    2. Inside the constructor(), set the School properties. Prepend all of the properties with an underscore (_).

    3. Create getters for the name, level, and numberOfStudents properties. Each getter should return the value saved to the property.

    4. Create a setter for numberOfStudents. The method should first check if the input (newNumberOfStudents) is a number.
    If it is a number, then set the numberOfStudents property. If not, log, 'Invalid input: numberOfStudents must be set to a Number.'

    5. Under your getters, create a method named quickFacts that logs the following string to the console:
        SCHOOL NAME educates NUMBER OF STUDENTS students at the LEVEL school level.
    In place of SCHOOL NAME, substitute an instance’s name value. In place of NUMBER OF STUDENTS, substitute an instance’s numberOfStudents value. In place of LEVEL, substitute an instance’s level value.

    6. Under .quickFacts(), create a static method named pickSubstituteTeacher. This method will receive one parameter, named substituteTeachers. The substituteTeachers parameter will take an array of strings.
    Inside the method, randomly generate a whole number between 0 and one less than the length of the substituteTeachers array. Use this number to access and return the substitute teacher at that randomly generated index.
*/

class School {
    constructor(name, level, numberOfStudents) {
        this._name = name; // string
        this._level = level; // one of 'primary' 'middle' 'high'
        this._numberOfStudents = numberOfStudents; // number
    }
    get name(){
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }
    set numberOfStudents(n) {
        if(typeof n === 'number') {
            this._numberOfStudents = n;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }
    quickFact() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }
    static pickSubstituteTeacher(substituteTeacherArr) {
        return substituteTeacherArr[Math.floor(Math.random() * substituteTeacherArr.length)];
    }
}

/*
Create PrimarySchool Class
    7. PrimarySchool class only has one additional property, pickupPolicy.
    Create an empty PrimarySchool class that extends School.
    
    8. Inside the PrimarySchool class, create a constructor() that accepts three arguments.
    
    9. Call super on the first line of the PrimarySchool‘s constructor(). Pass it any arguments that the parent constructor() uses.
    Since this is the PrimarySchool class, pass 'primary' as the argument for the level parameter in the parent constructor.

    10. Use the remaining argument to set the pickupPolicy property.

    11. Since our PrimarySchool class inherits Schools‘s properties and getters, we only need to create one new getter in the PrimarySchool class. Add this getter to the PrimarySchool class. Each getter should return the value saved to that property.
*/
class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy; // string
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

/*
additional: Create a middle school class
*/
class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
        super(name, 'Middle', numberOfStudents);
    }
}
/*
Create HighSchool Class
    12. In this task, you will create a HighSchool class that extends the School class. In addition to the properties, getters, and methods in School, the HighSchool includes the following:
        Properties: sportsTeams (array of strings)
        Getters: A getter for the sportsTeams array. The getter should log all of the sports to the console.
    Follow these steps to complete the task:
        - Create an empty HighSchool class that extends School.
        - Create a constructor() that accepts arguments for name, numberOfStudents, and sportsTeams.
        - On the first line of the constructor(), call super and pass it name, 'high', and numberOfStudents as arugments.
        - On the next line, set the sportsTeams property using this._
        - Under the constructor(), create a getter for sportsTeams. Use console.log() to print the sportsTeams value to the console.
*/
class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'High', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        console.log(this._sportsTeams);
    }
}

/*
Instances of PrimarySchool and HighSchool
    13. Create a PrimarySchool instance with the following properties:
        Save the instance to a constant variable named lorraineHansbury.
        Name: 'Lorraine Hansbury'
        Number of Students: 514
        Pickup Policy: 'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
    
    14. Call .quickFacts() on the lorraineHansbury instance.
    
    15. The principal of Lorraine Hansbury needs a substitute teacher for the day.
    Call .pickSubstituteTeacher() on School, and pass the following array as an argument:
        ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];

    16. Create a HighSchool instance with the following properties:
        Save the instance to a constant variable named alSmith.
        Name: 'Al E. Smith'
        Number of Students: 415
        Sports Teams: ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']

    17. Get the value saved to the sportsTeams property in alSmith.
*/

const lorrainHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be pickedup by a parent, guardian, or a family member over the age of 13.');
lorrainHansbury.quickFact();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball','Basketball', 'Volleyball', 'Track and Field']);
alSmith.sportsTeams;
