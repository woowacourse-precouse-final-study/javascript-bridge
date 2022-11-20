const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { GAME_GUIDE_MESSAGES } = require('./constants');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class Controller {
	constructor() {
		this.bridgeGameModel = new BridgeGame();
		this.bridgeGameView = {
			OutputView,
			InputView,
		};
	}

	start() {
		this.bridgeGameView.OutputView.printMessage(GAME_GUIDE_MESSAGES.START);
		this.createBridge();
	}

	createBridge() {
		this.bridgeGameView.InputView.readBridgeSize(sizeInput => {
			const answerBridge = BridgeMaker.makeBridge(Number(sizeInput), BridgeRandomNumberGenerator.generate);
			this.bridgeGameModel.setState({ answerBridge });
		});
	}
}

module.exports = {
	Controller,
};
