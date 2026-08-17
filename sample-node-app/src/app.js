const chalk = require('chalk');
const { add, formatMessage } = require('./math');

const numberA = 2;
const numberB = 3;
const total = add(numberA, numberB);

console.log(chalk.green(formatMessage('GitHub Actions')));
console.log(chalk.blue(`The sum of ${numberA} and ${numberB} is ${total}.`));

module.exports = {
  add,
  formatMessage,
  total,
};
