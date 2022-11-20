const BridgeGame = require('./BridgeGame');
const { GAME_GUIDE_MESSAGES } = require('./constants');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class Controller {
	constructor() {
		this.brigeGameModel = new BridgeGame();
		this.bridgeGameView = {
			OutputView,
			InputView,
		};
	}

	start() {
		this.bridgeGameView.OutputView.printMessage(GAME_GUIDE_MESSAGES.START);
	}
}

module.exports = {
	Controller,
};
