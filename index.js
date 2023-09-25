// define variable employee as an object with two keys 
let employee = {
    name: "Lucy",
    streetname: "Jogoo rd"
};
 function updateEmployeeWithKeyAndValue(employee, key, value) {
    let updatedEmployee= {employee, [key]: value};
    return updatedEmployee
 }
 //define destructive function 
 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    let employee={[key]: value};
    return employee
 }
//define a function to delet from employee key
 function deleteFromEmployeeByKey(employee, key) {
    let newemployee= {employee};
    delete newemployee[key];
    return newemployee
 }
 //define a function to destructively delete from employee by key
 function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;

 }