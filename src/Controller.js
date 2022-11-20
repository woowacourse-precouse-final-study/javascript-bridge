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
}

module.exports = {
	Controller,
};
