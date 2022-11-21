const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { Console } = require('@woowacourse/mission-utils');
const { GAME_GUIDE_MESSAGES, COMMAND } = require('./constants');
const { lengthInputValidation, directionInputValidation, commandInputValidation, validation } = require('./validation');

class Controller {
	constructor() {
		this.model = new BridgeGame();
		this.view = {
			output: OutputView,
			input: InputView,
		};
	}

	start() {
		this.view.output.printMessage(GAME_GUIDE_MESSAGES.START);
		this.createBridge();
	}

	createBridge() {
		this.view.input.readBridgeSize(sizeInput => {
			const size = validation(sizeInput, lengthInputValidation, this.createBridge.bind(this));
			const answerBridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
			this.model.setState({ answerBridge });
			this.playRound();
		});
	}

	playRound() {
		this.view.input.readMoving(directionInput => {
			const direction = validation(directionInput, directionInputValidation, this.playRound.bind(this));
			this.model.move(direction);

			const { isAlive, currentLocation, answerBridge, currentUserBridge } = this.model.state;
			this.view.output.printMap(currentUserBridge);

			if (!isAlive) {
				this.chooseRetryOrEnd();
			} else if (currentLocation === answerBridge.length) {
				this.endGame();
			} else {
				this.playRound();
			}
		});
	}

	chooseRetryOrEnd() {
		this.view.input.readGameCommand(commandInput => {
			const command = validation(commandInput, commandInputValidation, this.chooseRetryOrEnd.bind(this));

			if (command === COMMAND.RESTART) {
				this.model.retry();
				this.playRound();
			} else if (command === COMMAND.QUIT) {
				this.endGame();
			}
		});
	}

	endGame() {
		this.view.output.printResult(this.model.state);
		Console.close();
	}
}

module.exports = {
	Controller,
};
