const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, salary, title, manager, employees = []) {
    super(name, salary, title, manager),
    this.employees = employees;
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  calculateBonus(multiplier) {
    return (this._totalSubSalary() + this.salary) * multiplier;
  }

  _totalSubSalary() {
    let sum = 0;
    for (const employee of this.employees) {
      if (employee instanceof Manager) {
        // If the employee is a Manager, recursively calculate their sub-salary
        sum += employee._totalSubSalary();
      }
      // If the employee is instanceof Employee, simply add their salary
      sum += employee.salary;
    }
    return sum;
  }
}


try {
  module.exports = Manager;
} catch {
  module.exports = null;
}
