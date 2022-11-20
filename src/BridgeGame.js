/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
	#state = {
		answerBridge: null,
		trials: 0,
		currentLocation: 0,
		currentUserBridge: {
			up: [],
			down: [],
		},
	};

	get state() {
		return this.#state;
	}

	setState(nextState) {
		this.#state = { ...this.#state, ...nextState };
	}

	/**
	 * 사용자가 칸을 이동할 때 사용하는 메서드
	 * <p>
	 * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	move(directionInput) {
		const { answerBridge, currentLocation } = this.state;
		const isAnswer = directionInput === answerBridge[currentLocation];
		this.generateCurrentUserBridge(isAnswer, directionInput);

		console.log(this.state);
	}

	generateCurrentUserBridge(isAnswer, directionInput) {
		if (isAnswer) {
			if (directionInput === 'U') {
				const newUp = [...this.state.currentUserBridge.up, 'O'];
				const newDown = [...this.state.currentUserBridge.down, ' '];
				this.setState({ currentUserBridge: { up: newUp, down: newDown } });
			} else if (directionInput === 'D') {
				const newUp = [...this.state.currentUserBridge.up, ' '];
				const newDown = [...this.state.currentUserBridge.down, 'O'];
				this.setState({ currentUserBridge: { up: newUp, down: newDown } });
			}
		} else {
			if (directionInput === 'U') {
				const newUp = [...this.state.currentUserBridge.up, 'X'];
				const newDown = [...this.state.currentUserBridge.down, ' '];
				this.setState({ currentUserBridge: { up: newUp, down: newDown } });
			} else if (directionInput === 'D') {
				const newUp = [...this.state.currentUserBridge.up, ' '];
				const newDown = [...this.state.currentUserBridge.down, 'X'];
				this.setState({ currentUserBridge: { up: newUp, down: newDown } });
			}
		}
	}

	/**
	 * 사용자가 게임을 다시 시도할 때 사용하는 메서드
	 * <p>
	 * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	retry() {}
}

module.exports = BridgeGame;
