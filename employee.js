class Employee {
    constructor (name, salary, title, manager) {
        this.name = name,
        this.title = title,
        this.salary = salary;
        if (!manager) {
            this.manager = null;
        } else {
            manager.addEmployee(this);
        }
    }

    calculateBonus(multiplier) {
        const bonus = this.salary * multiplier;
        return bonus;
    }
}


try {
    module.exports = Employee;
} catch {
    module.exports = null;
}
