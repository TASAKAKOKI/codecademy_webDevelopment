/*
Create ParentSchool Class
    Let’s start by making a parent class for Primary, Middle, and High classes. Create an empty class named School.
*/

/*
version3 with catalog declare in the beginning.
*/


/*
Create a class called SchoolCatalog that holds a collection of schools. Create an instance of SchoolCatalog for primary, middle, and high schools.
 */

class SchoolCatalog {
    constructor() {
        this.catalog
    }
}
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
class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy; // string
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}
class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
        super(name, 'Middle', numberOfStudents);
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'High', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeams;
    }
}

const lorrainHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be pickedup by a parent, guardian, or a family member over the age of 13.');
lorrainHansbury.quickFact();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
console.log(lorrainHansbury);

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball','Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);
console.log(alSmith);
class SchoolCatalog {
    

}
const currentCatalog = new SchoolCatalog
