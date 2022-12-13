const InputView = require("../View/InputView");
const { generate } = require("../BridgeRandomNumberGenerator");
const { makeBridge } = require("../BridgeMaker");

class Controller {
  #size;

  getBridgeSize() {
    InputView.readBridgeSize((size) => {
      this.#size = size;
      return this.getMovingSpace();
    });
  }

  getAnswerBridge() {
    return makeBridge(this.#size, generate);
  }
}

module.exports = Controller;
