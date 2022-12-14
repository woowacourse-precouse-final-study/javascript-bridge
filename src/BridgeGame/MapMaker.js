const OutputView = require('../View/OutputView');
const { LETTER_SIGN, DIRECTION } = require('../Constants');

class MapMaker {
  #upperMapArray;
  #lowerMapArray;

  constructor() {
    this.#upperMapArray = [];
    this.#lowerMapArray = [];
  }

  selectRightBridge(space) {
    if (space === DIRECTION.UP) this.drawSignUpperMap(LETTER_SIGN.RIGHT);
    if (space === DIRECTION.DOWN) this.drawSignLowerMap(LETTER_SIGN.RIGHT);
    OutputView.printMap(this.#upperMapArray, this.#lowerMapArray);
  }

  selectWrongBridge(space) {
    if (space === DIRECTION.UP) this.drawSignUpperMap(LETTER_SIGN.WRONG);
    if (space === DIRECTION.DOWN) this.drawSignLowerMap(LETTER_SIGN.WRONG);
    OutputView.printMap(this.#upperMapArray, this.#lowerMapArray);
  }

  drawSignUpperMap(sign) {
    this.#upperMapArray.push(sign);
    this.#lowerMapArray.push(LETTER_SIGN.BLANK);
  }

  drawSignLowerMap(sign) {
    this.#upperMapArray.push(LETTER_SIGN.BLANK);
    this.#lowerMapArray.push(sign);
  }

  makeFinalSuccess(space, attemptNumber) {
    this.selectRightBridge(space);
    OutputView.printResult(this.#upperMapArray, this.#lowerMapArray, attemptNumber);
  }

  selectGameOver(attemptNumber) {
    OutputView.printResult(this.#upperMapArray, this.#lowerMapArray, attemptNumber);
  }
}

module.exports = MapMaker;