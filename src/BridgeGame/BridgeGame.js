const { GAME_OUTCOME } = require("../Constants");
const MapMaker = require("./MapMaker");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #answerBridge;
  #bridgeIndex;
  #attemptNumber;
  #mapMaker;

  constructor(answerBridge) {
    this.#answerBridge = answerBridge;
    this.#bridgeIndex = 1;
    this.#attemptNumber = 1;
  }

  decideMoveOrStop(space) {
    if (space !== this.#answerBridge[this.#bridgeIndex - 1]) return this.stop();
    if (this.#bridgeIndex === this.#answerBridge.length) return this.success();
    return this.move();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    this.#bridgeIndex += 1;
    this.#mapMaker.selectRightBridge(direction);
    return GAME_OUTCOME.move;
  }

  stop() {
    this.#mapMaker.selectWrongBridge(direction);
    return GAME_OUTCOME.stop;
  }

  success() {
    this.#mapMaker.makeFinalSuccess(direction, this.#attemptNumber);
    return GAME_OUTCOME.success;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#bridgeIndex = 1;
    this.#attemptNumber += 1;
    this.#mapMaker = new MapMaker();
  }

  quit() {
    this.#mapMaker.selectGameOver(this.#attemptNumber);
  }
}

module.exports = BridgeGame;
