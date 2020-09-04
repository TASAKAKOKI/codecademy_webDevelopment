/*
1.
  Run the program in employee.js to view the output in the console.
    Notice that the getEmployeeInformation() function at the bottom of the file returns the cadre, tax, benefits, bonus, and reimbursement eligibility based on a person’s payGrade.
*/

/*
3.
  Let’s turn the contents of the information into a module. At the top of the file, using let, set the Employee to an object that represents the module.
*/
const Employee = {
  /*
  4.
    Move the salary property inside the Employee object, keeping the default value of 100000, using the appropriate syntax for defining a property and its value.
      Recall that we can also set properties inside the object, and it has the same value as if it was declared outside the object as Employee.salary.
  */
  salary: 100000,
  /*
  5. 
    For the rest of the functions in employee.js, define functions, except payGrades(), as properties on the Employee object. If you are uncertain about the proper syntax for this, check the hint.
  6.
    within the body of each function, closely check that each property of the Employee object is defined on Employee.
      For example, every instance of salary should be defined as Employee.salary since it is a property of the Employee object.
  */
  getCadre() {
    if (this.salary >= payGrades.entryLevel.minSalary && this.salary <= payGrades.entryLevel.maxSalary) {
      return 'entryLevel';
    } else if (this.salary >= payGrades.midLevel.minSalary && this.salary <= payGrades.midLevel.maxSalary) {
      return 'midLevel';
    } else return 'seniorLevel';
  },
  
  calculateTax() {
    return payGrades[this.getCadre()].taxMultiplier * this.salary;
  },
  
  getBenefits() {
    return payGrades[this.getCadre()].benefits.join(', ');
  },
  
  calculateBonus() {
    return .02 * this.salary;
  },
  
  reimbursementEligibility() {
    let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
    let totalBenefitsValue = 0; 
    let employeeBenefits = payGrades[this.getCadre()].benefits;
    for (let i = 0; i < employeeBenefits.length; i++) {
      totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
    }
    return totalBenefitsValue;
  }
};

let payGrades = {
  entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
  midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
  seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};

module.exports = Employee;