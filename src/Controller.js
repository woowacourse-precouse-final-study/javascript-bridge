const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { Console } = require('@woowacourse/mission-utils');
const { GAME_GUIDE_MESSAGES } = require('./constants');

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
			const answerBridge = BridgeMaker.makeBridge(Number(sizeInput), BridgeRandomNumberGenerator.generate);
			this.model.setState({ answerBridge });
			this.playRound();
		});
	}

	playRound() {
		this.view.input.readMoving(directionInput => {
			this.model.move(directionInput);

			const { isSurvive, currentLocation, answerBridge, currentUserBridge } = this.model.state;
			this.view.output.printMap(currentUserBridge);

			if (!isSurvive) {
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
			if (commandInput === 'R') {
				this.model.retry();
				this.playRound();
			} else if (commandInput === 'Q') {
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
