const { Controller } = require('./Controller');

class App {
	play() {
		const gameController = new Controller();
	}
}

module.exports = App;

const app = new App();
app.play();
