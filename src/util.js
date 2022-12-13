const { Console } = require("@woowacourse/mission-utils");

const catchError = (input, validation)  => {
  try {
    validation(input);
  } catch (error) {
    Console.print(error);
    return '[ERROR]'
  }
};

module.exports = { catchError };
