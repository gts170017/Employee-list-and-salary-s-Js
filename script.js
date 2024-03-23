// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = [];

// Collect employee data
const collectEmployees = function() {
  // Prompt the user enter their name
  let firstName = window.prompt("Enter your first name:");
  let lastName = window.prompt("Enter your last name:");
  let salary = parseFloat(window.prompt("Enter your salary:"));

  console.log(firstName, lastName, salary);

  const employee = {
    firstName: firstName,
    lastName: lastName,
    salary: salary
  };

  employeesArray.push(employee);
  console.log(employeesArray);
  console.log(employee);

  return employeesArray;
};

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // Calculate the total salary
  const totalSalary = employeesArray.reduce((total, employee) => total + parseFloat(employee.salary), 0);

  // Calculate the average salary
  const averageSalary = totalSalary / employeesArray.length;

  // Display the average salary
  console.log(`The average salary is: ${averageSalary.toLocaleString("en-US", { style: "currency", currency: "USD" })}`);
};

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // Generate a random number between 0 and the length of the employeesArray
  const randomIndex = Math.floor(Math.random() * employeesArray.length);

  // Select and display a random employee
  const randomEmployee = employeesArray[randomIndex];
  console.log(`Random employee: ${randomEmployee.firstName} ${randomEmployee.lastName} - ${randomEmployee.salary.toLocaleString("en-US", { style: "currency", currency: "USD" })}`);
};

/* ==================== STARTER CODE Do not modify any of the code below this line: */

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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", { style: "currency", currency: "USD" });
    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function() {
  const employees = collectEmployees(addEmployeesBtn);
  console.table(employees);
  displayAverageSalary(employees);
  console.log('==============================');
  getRandomEmployee(employees);
  employees.sort(function(a, b) {
    const aLastName = a.lastName.toLowerCase();
    const bLastName = b.lastName.toLowerCase();
    if (aLastName < bLastName) {
      return -1;
    } else if (aLastName > bLastName) {
      return 1;
    } else {
      return 0;
    }
  });
  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);