/*
2.
    Let’s transform the program using modules.
    
    We’ll first segment the program by placing the behavior and data in employee.js, and the use of the data in workAround.js.
    Copy the getEmployeeInformation() function and the three function calls beneath it, and paste the function into the workAround.js file. Be sure to remove the copied code from employee.js completely.
    
    Notice that when you run the program, the console returns a ReferenceError that salary is not defined. We’ll fix this as we build out the program with modules.
*/

/*
8.--> Error --> changed Import to Require().
    Syntax Error: Cannot use import statement outside a module...
    Import the Employee module using the import statement. Recall that you will need to import the module using the ./employee file path.
    
    Note that you will still see the ReferenceError at this point.
*/
const Employee = require('./employee_1_moduleExports_works');

/*
9. 
    In workAround.js in the getEmployeeInformation() function, modify the variables such that they are a property on the Employee module.
    
    For example salary should be defined as Employee.salary and calculateTax() should be modified to Employee.calculateTax().
    
    You should see the program’s output.
*/
function getEmployeeInformation(inputSalary) {
    Employee.salary = inputSalary;
    console.log('Cadre: ' + Employee.getCadre());
    console.log('Tax: ' + Employee.calculateTax());
    console.log('Benefits: ' + Employee.getBenefits());
    console.log('Bonus: ' + Employee.calculateBonus());
    console.log('Reimbursement Eligibility: ' + Employee.reimbursementEligibility() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);
  