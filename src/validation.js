const { ERROR_MESSAGE, LENGTH } = require('./constants');

const lengthInputValidation = strLength => {
	const length = parseInt(strLength);
	if (isNaN(length)) {
		throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
	}
	if (length < 3 || length > 20) {
		throw new Error(ERROR_MESSAGE.INVALID_RANGE(LENGTH.MIN, LENGTH.MAX));
	}

	return length;
};

module.exports = {
	lengthInputValidation,
};
