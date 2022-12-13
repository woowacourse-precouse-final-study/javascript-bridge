const InputView = require("../View/InputView");

class Controller {
  handleBridgeSize() {
    InputView.readBridgeSize((size) => {
    });
  }
}

module.exports = Controller;