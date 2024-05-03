// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

//to add grid to hold the information
addEmployeesBtn.addEvenetListener('click', function() {
 //const userFirstName = prompt( 'Add First Name' );
 //const userLastName = prompt ( 'Add Last Name' );
 //const userSalary = prompt ( 'Add Salary' );
 //console.log('userInput');
});

// Collect employee data
const collectEmployees = function() {
    const employees = [];
    let continueAdding = true;
    while (continueAdding) {
      let firstName = prompt('Add First Name');
      let lastName = prompt('Add Last Name');
      let employeeSalary = prompt('Add Salary');

      let salary = 0;
      let _tsalary = prompt('Get Salary');

      salary = (isNaN(_tsalary) || _tsalary === null) ? 0 : Number(_tsalary);
      employees.push ({
        firstName: firstName,
        lastName: lastName,
        salary: salary
      });
      continueAdding = confirm('Do You Want to Add Another Employee?');
    }
  // TODO: Get user input to create and return an array of employee objects
return employees;
}
//i placed a confirm prompt to retrieve user input on whether to add another employee or terminate


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
  //calculates the total salary range of the employee array
  const averageSalary = totalSalary / employeesArray.length;
  //sets the average variable; the total was found by taking the total salary range and dividing it by the entire array length
  const current = employeesArray.length;
  //sets the current variable to be the array after employees are added, and let that be equal to the total length of this returned array
  console.log(`The average employee salary between our ${current} employee(s) is ${averageSalary.toLocaleString("en-US", {style: "currency", currency: USD})}`);
  
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  //calulates the random index selectionin the array using the math.floor(math.random) times the employee array length
  const randomEmployye = employeesArray[randomIndex];
  //sets the variable for the random employee selection and made it equal t the returned array and index
  console.log(`Congrats! You are the winner! ${randomEmployee.firstName}`);
  //computer is set to log a congrats message to the employee winner using the object key value pair of the array and first name of the random employee
 // TODO: Select and display a random employee
}

//worked with Samuel Wlodawski to help better understand this code and to solve the challenge
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
