const Controller = require("./BridgeGame/Controller");

class App {
  play() {
    const controller = new Controller();
    controller.getBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
