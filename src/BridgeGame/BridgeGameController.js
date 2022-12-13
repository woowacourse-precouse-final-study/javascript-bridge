const InputView = require("../View/InputView");
const { catchError } = require("../util");
const { checkBridgeSize } = require("../Validation");

class Controller {
  #size;

  handleBridgeSize() {
    InputView.readBridgeSize((size) => {
      this.#size = catchError(size, checkBridgeSize);
      if (this.#size === "[ERROR]") return this.handleBridgeSize();
    });
  }
}

module.exports = Controller;
