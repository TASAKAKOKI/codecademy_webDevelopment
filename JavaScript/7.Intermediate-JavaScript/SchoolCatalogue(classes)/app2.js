/*
Create ParentSchool Class
    Let’s start by making a parent class for Primary, Middle, and High classes. Create an empty class named School.
*/

/*
version2 with catalog declare in the end.
*/


/*
for this:
    Create a class called SchoolCatalog that holds a collection of schools. Create an instance of SchoolCatalog for primary, middle, and high schools.
i will make empty array first, and will push all the instances.
*/
const catalog = [];

class School {
    constructor(name, level, numberOfStudents) {
        this._name = name; // string
        this._level = level; // one of 'primary' 'middle' 'high'
        this._numberOfStudents = numberOfStudents; // number
        catalog.push(this);
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

/* log the substitute teacher */
console.log(`SubstituteTeacher is... ${School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli', 'CodecademyBot???'])}`);

/* create PrimarySchool instance */
const lorrainHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be pickedup by a parent, guardian, or a family member over the age of 13.');

/* create HighSchool instance */
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball','Basketball', 'Volleyball', 'Track and Field']);

/* create MiddleSchool instance */
const Codecademy = new MiddleSchool('Code Cademy Awesome', 390);

class SchoolCatalog {
    constructor(arr) {
        this.catalog = arr;
    }
}
const currentCatalog = new SchoolCatalog(catalog);
console.log(currentCatalog);
console.log(currentCatalog.catalog);
console.log(currentCatalog.catalog[0]);
console.log(currentCatalog.catalog[0].name);
//이걸 잘 이용하면, catalog에 현재까지 만들어진 instances 들 중에서 특정 조건과 일치(?)하는 instance를 찾아볼 수도 있을 것 같다.