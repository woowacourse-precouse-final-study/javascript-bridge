const { ERROR_MESSAGE, LENGTH_RANGE } = require('./constants');

const lengthInputValidation = strLength => {
	const length = parseInt(strLength);
	if (isNaN(length)) {
		throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
	}
	if (length < 3 || length > 20) {
		const { MIN, MAX } = LENGTH_RANGE;
		throw new Error(ERROR_MESSAGE.INVALID_RANGE(MIN, MAX));
	}

	return length;
};

module.exports = {
	lengthInputValidation,
};
