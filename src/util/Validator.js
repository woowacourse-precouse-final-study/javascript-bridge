const {ERROR_MESSAGE : {errorSizeMessage,errorNumberMessage,errorUOrDMessage,errorROrQMessage}} = require('../util/Constant')
const Validator = {
  isVaildBridgeSize(input) {
    if (input < 3 || input > 20) {
      throw new Error(errorSizeMessage);
    }
    return true;
  },
  isVaildBridgeSizeNum(input) {
    const NUM_PATTERN = /^[0-9]*$/g;
    if (!NUM_PATTERN.test(input)) {
      throw new Error(errorNumberMessage);
    }
    return true;
  },
  isVaildUorD(input) {
    if (input !== "U" && input !== "D") {
      throw new Error(errorUOrDMessage);
    }
    return true;
  },
  isVaildRorQ(input) {
    if (input !== "R" && input !== "Q") {
      throw new Error(errorROrQMessage);
    }
    return true;
  },
};

module.exports = Validator;
