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
};

/*
5--> 10 --> 15.
  Nice work! WorkAround asks you demonstrate one more thing: combine both exporting variables as they are declared and the export default statement.

  In employee.js use the export keyword to export getCadre(), calculateTax(), getBenefits(), calculateBonus() and reimbursementEligibility() as they are declared.
6--> 11
  within the body of each function, closely check that each property of the Employee object is defined on Employee.
    For example, every instance of salary should be defined as Employee.salary since it is a property of the Employee object.
  -------------changed as below---------------------
  You’ll also need to make sure that each mention of a function is no longer a property on the Employee object.

  Specifically, getCadre() will no longer be a property of the Employee object.

  However, you can leave salary as Employee.salary since it is inside the object.
*/

export function getCadre() {
  if (Employee.salary >= payGrades.entryLevel.minSalary && Employee.salary <= payGrades.entryLevel.maxSalary) {
    return 'entryLevel';
  } else if (Employee.salary >= payGrades.midLevel.minSalary && Employee.salary <= payGrades.midLevel.maxSalary) {
    return 'midLevel';
  } else return 'seniorLevel';
};

export function calculateTax() {
  return payGrades[getCadre()].taxMultiplier * Employee.salary;
};

export function getBenefits() {
  return payGrades[getCadre()].benefits.join(', ');
};

export function calculateBonus() {
  return .02 * Employee.salary;
};

export function reimbursementEligibility() {
  let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
  let totalBenefitsValue = 0; 
  let employeeBenefits = payGrades[getCadre()].benefits;
  for (let i = 0; i < employeeBenefits.length; i++) {
    totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
  }
  return totalBenefitsValue;
};

let payGrades = {
  entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
  midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
  seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};

/*
12--> 15.
   At the bottom of the file, use the export default statement to export the Employee module.
*/

export default Employee;
export { getCadre as cadre, calculateTax as tax, getBenefits as benefits, calculateBonus as bonus, reimbursementEligibility as reimbursement };