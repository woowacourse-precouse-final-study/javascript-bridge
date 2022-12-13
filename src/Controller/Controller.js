const OutputView = require("../View/OutputView");
const InputView = require("../View/InputView");
const BridgeMaker = require("../BridgeMaker");
const { generate } = require("../util/BridgeRandomNumberGenerator");
const BridgeGame = require("../Model/BridgeGame");
const MissionUtils = require("@woowacourse/mission-utils");
const Validator = require("../util/Validator");
const {SUCCESS_FAIL_MESSAGE : {success,fail},RETRY_STOP_MESSAGE : {retry,stop}} = require('../util/Constant')

class Controller {
  #answerBirdgeList;
  constructor() {
    this.#answerBirdgeList;
    this.bridgeGame = new BridgeGame();
    this.showResult;
  }
  start() {
    OutputView.printStart();
    this.getBridegeSize();
  }

  getBridegeSize() {
    InputView.readBridgeSize(this.getBirdgeAnswer.bind(this));
  }

  getMove() {
    InputView.readMoving(this.compare.bind(this));
  }

  getBirdgeAnswer(sizeNumber) {
    try {
      Validator.isVaildBridgeSize(sizeNumber);
      Validator.isVaildBridgeSizeNum(sizeNumber);
      this.#answerBirdgeList = BridgeMaker.makeBridge(sizeNumber, generate);
      this.getMove();
    } catch (error) {
      MissionUtils.Console.print(error);
      this.getBridegeSize();
    }
  }

  compare(moveInput) {
    try {
      Validator.isVaildUorD(moveInput);
      const compareMove = this.bridgeGame.move(
        moveInput,
        this.#answerBirdgeList
      );

      this.showResult = OutputView.printMap(
        this.bridgeGame.upList,
        this.bridgeGame.downList
      );
      if (compareMove === "END") this.finalResult(success);
      else {
        compareMove ? this.getMove() : this.getRetryOrStop();
      }
    } catch (error) {
      MissionUtils.Console.print(error);
      this.getMove();
    }
  }

  getRetryOrStop() {
    InputView.readGameCommand(this.judgment.bind(this));
  }

  judgment(reTryOrStop) {
    try {
      Validator.isVaildRorQ(reTryOrStop);
      if (reTryOrStop === retry) {
        this.bridgeGame.retry();
        this.getMove();
      }
      if (reTryOrStop === stop) {
        this.finalResult(fail);
        this.gameStop();
      }
    } catch (error) {
      MissionUtils.Console.print(error);
      this.getRetryOrStop();
    }
  }

  finalResult(successOrFailure) {
    OutputView.printResult(
      this.showResult,
      successOrFailure,
      this.bridgeGame.retryCount
    );
    this.gameStop();
  }
  gameStop() {
    MissionUtils.Console.close();
  }
}

module.exports = Controller;
