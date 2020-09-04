/*
2.
    Let’s transform the program using modules.

    We’ll first segment the program by placing the behavior and data in employee.js, and the use of the data in workAround.js.
    
    Copy the getEmployeeInformation() function and the three function calls beneath it, and paste the function into the workAround.js file. Be sure to remove the copied code from employee.js completely.

    Notice that when you run the program, the console returns a ReferenceError that salary is not defined. We’ll fix this as we build out the program with modules.
*/
/*
8.--> 13 --> 16.
    Write an import statement that imports each of the variables using their modified variable names.
    Beneath this statement, write another import statement that imports the Employee module.
*/
import { Employee, cadre, tax, benefits, bonus, reimbursement } from './employee_3_exportNesting';
import Employee from './employee_3_exportNesting';
/*
9 --> 14.
    in the, getEmployeeInformation() function, modify the function, such that each of the variables is written as its alias. For example, Employee.getCadre() will be modified to cadre().

    You should see the program’s output!
*/
function getEmployeeInformation(inputSalary) {
    Employee.salary = inputSalary;
    console.log('Cadre: ' + cadre());
    console.log('Tax: ' + tax());
    console.log('Benefits: ' + benefits());
    console.log('Bonus: ' + bonus());
    console.log('Reimbursement Eligibility: ' + reimbursement() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);
  