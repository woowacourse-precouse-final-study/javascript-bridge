const InputView = require("../View/InputView");
const { generate } = require("../BridgeRandomNumberGenerator");
const { makeBridge } = require("../BridgeMaker");
const BridgeGame = require("./BridgeGame");
const { GAME_OUTCOME, GAME_COMMAND } = require("../Constants");
const { Console } = require("@woowacourse/mission-utils");

class Controller {
  #size;
  #bridgeGame;

  getBridgeSize() {
    InputView.readBridgeSize((size) => {
      this.#size = size;
      this.#bridgeGame = new BridgeGame(makeBridge(this.#size, generate));
      
      return this.handleMovingSpace();
    });
  }

  handleMovingSpace() {
    InputView.readMoving((space) => {
      const gameOutcome = this.#bridgeGame.decideMoveOrStop(space);
      if (gameOutcome === GAME_OUTCOME.success) Console.close();
      if (gameOutcome === GAME_OUTCOME.move) this.handleMovingSpace();
      if (gameOutcome === GAME_OUTCOME.fail) this.handleGameCommand();
    });
  }

  handleGameCommand() {
    InputView.readGameCommand((command) => {
      if(command === GAME_COMMAND.restart) {
        this.#bridgeGame.retry();
        this.handleMovingSpace();
      }
      if(command === GAME_COMMAND.quit) {
        this.#bridgeGame.quit();
        Console.close();
      }
    })
  }
}

module.exports = Controller;
