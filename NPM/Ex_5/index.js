const Logger = require("logplease");
const isEven = require("./numbers");

const logger = Logger.create("utils");

const numbers = [2, 3, 101, 201, 202, 100];

numbers.map(number =>
  isEven(number)
    ? logger.info(`${number} is even`)
    : logger.error(`${number} is odd`)
);
