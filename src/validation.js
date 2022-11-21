const { ERROR_MESSAGE, DIRECTION, LENGTH_RANGE } = require('./constants');

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

const directionInputValidation = directionInput => {
	const direction = directionInput.replace(/\s/g, '').toUpperCase();
	const { UP, DOWN } = DIRECTION;
	
	if (direction !== UP && direction !== DOWN) {
		throw new Error(ERROR_MESSAGE.INVALID_INPUT_CHOICE([UP, DOWN]));
	}

	return direction;
};

module.exports = {
	lengthInputValidation,
	directionInputValidation,
};
