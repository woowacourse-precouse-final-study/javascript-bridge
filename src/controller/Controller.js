const BridgeGame = require('../model/BridgeGame');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const { Console } = require('@woowacourse/mission-utils');
const { COMMAND, STATUS } = require('../utils/constants');
const {
  lengthInputValidation,
  directionInputValidation,
  commandInputValidation,
  validation,
} = require('../utils/validation');

class Controller {
  constructor() {
    this.model = new BridgeGame();
    this.view = {
      output: OutputView,
      input: InputView,
    };
  }

  start() {
    this.view.output.printStart();
    this.createBridge();
  }

  createBridge() {
    this.view.input.readBridgeSize(sizeInput => {
      const size = validation(sizeInput, lengthInputValidation, this.createBridge.bind(this));
      this.model.makeBridge(size);
      this.playRound();
    });
  }

  playRound() {
    this.view.input.readMoving(directionInput => {
      const direction = validation(directionInput, directionInputValidation, this.playRound.bind(this));
      if (!direction) return;
      const currentUserBridge = this.model.move(direction);
      this.view.output.printMap(currentUserBridge);
      this.chooseNextStep();
    });
  }

  chooseNextStep() {
    const status = this.model.getStatus();
    switch (status) {
      case STATUS.DEAD:
        this.chooseRetryOrEnd();
        break;
      case STATUS.END:
        this.endGame();
        break;
      case STATUS.CONTINUE:
        this.playRound();
        break;
    }
  }

  chooseRetryOrEnd() {
    this.view.input.readGameCommand(commandInput => {
      const command = validation(commandInput, commandInputValidation, this.chooseRetryOrEnd.bind(this));

      if (command === COMMAND.QUIT) this.endGame();
      if (command === COMMAND.RESTART) {
        this.model.retry();
        this.playRound();
      }
    });
  }

  endGame() {
    const result = this.model.getFinalResult();
    this.view.output.printResult(result);
    Console.close();
  }
}

module.exports = {
  Controller,
};
