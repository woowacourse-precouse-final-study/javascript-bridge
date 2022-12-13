const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../utils/BridgeRandomNumberGenerator');
const { STEPS, STATUS } = require('../utils/constants');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #answerBridge;
  #currentLocation = 0;
  #trials = 1;
  #isAlive = true;
  #currentUserBridge = {
    up: [],
    down: [],
  };

  getStatus() {
    const isEnd = this.#currentLocation === this.#answerBridge.length;
    if (!this.#isAlive) return STATUS.DEAD;
    if (isEnd) return STATUS.END;
    return STATUS.CONTINUE;
  }

  getFinalResult() {
    return {
      currentUserBridge: this.#currentUserBridge,
      isAlive: this.#isAlive,
      trials: this.#trials,
    };
  }

  makeBridge(size) {
    const answerBridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#answerBridge = answerBridge;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(directionInput) {
    const isAnswer = directionInput === this.#answerBridge[this.#currentLocation];
    this.updateStatus(isAnswer);
    return this.generateCurrentUserBridge(isAnswer, directionInput);
  }

  generateCurrentUserBridge(isAnswer, directionInput) {
    const answer = isAnswer ? 'ANSWER' : 'WRONG';
    const [newUp, newDown] = STEPS[answer][directionInput];

    this.#currentUserBridge = {
      up: [...this.#currentUserBridge.up, newUp],
      down: [...this.#currentUserBridge.down, newDown],
    };

    return this.#currentUserBridge;
  }

  updateStatus(isAnswer) {
    this.#currentLocation += 1;
    this.#isAlive = isAnswer ? true : false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#trials += 1;
    this.#isAlive = true;
    this.#currentLocation = 0;
    this.#currentUserBridge = { up: [], down: [] };
  }
}

module.exports = BridgeGame;
