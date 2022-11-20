const {
	Console: { readLine, print },
} = require('@woowacourse/mission-utils');
const { GAME_GUIDE_MESSAGES } = require('./constants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
	/**
	 * 다리의 길이를 입력받는다.
	 */
	readBridgeSize(createBridgeController) {
		readLine(GAME_GUIDE_MESSAGES.LENGHT_INPUT, sizeInput => {
			print('\n');
			createBridgeController(sizeInput);
		});
	},
	/**
	 * 사용자가 이동할 칸을 입력받는다.
	 */
	readMoving(moveController) {
		readLine(GAME_GUIDE_MESSAGES.MOVE_INPUT, directionInput => {
			print('\n');
			moveController(directionInput);
		});
	},

	/**
	 * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
	 */
	readGameCommand(commandController) {
		readLine(GAME_GUIDE_MESSAGES.COMMAND_INPUT, commandInput => {
			print('\n');
			commandController(commandInput);
		});
	},
};

module.exports = InputView;
