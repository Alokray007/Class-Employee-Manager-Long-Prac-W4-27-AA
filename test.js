const Manager = require("./manager");
const Employee = require("./employee");

const hobbes = new Manager("Hobbes", 1000000, "Founder", null);
const calvin = new Manager("Calvin", 130000, "Director", hobbes);
const susie = new Manager('Susie', 100000, 'TA Manager', calvin);
const lily = new Employee('Lily', 90000, 'TA', susie);
const clifford = new Employee('Clifford', 90000, 'TA', susie);

console.log(`${hobbes.name}'s bonus: $${hobbes.calculateBonus(0.05)}`);
console.log(`${calvin.name}'s bonus: $${calvin.calculateBonus(0.05)}`);
console.log(`${susie.name}'s bonus: $${susie.calculateBonus(0.05)}`);
console.log(`${lily.name}'s bonus: $${lily.calculateBonus(0.05)}`);
console.log(`${clifford.name}'s bonus: $${clifford.calculateBonus(0.05)}`);
