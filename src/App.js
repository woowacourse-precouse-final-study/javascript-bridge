const Controller = require("./BridgeGame/BridgeGameController");

class App {
  play() {
    const controller = new Controller();
    controller.handleBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
