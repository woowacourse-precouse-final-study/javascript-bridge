const {OUTPUT_RESULT :{right,wrong}, UPMOVE_DOWNMOVE_MESSAGE : {upMove,downMove}} = require('../Constant');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.gameCount = 0;
    this.retryCount = 1;
    this.upList = [];
    this.downList = [];
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  move(moveInput, answer) {
    if (moveInput === answer[this.gameCount]) {
      this.ingMove(right, moveInput);
      this.gameCount++;
      if (this.gameCount === answer.length) {
        return "END";
      }
      return true;
    }
    if (moveInput !== answer[this.gameCount]) {
      this.ingMove(wrong, moveInput);
      return false;
    }
  }

  ingMove(goOrStop, moveInput) {
    if (moveInput === upMove) {
      this.upList.push(goOrStop);
      this.downList.push("   ");
    }
    if (moveInput === downMove) {
      this.downList.push(goOrStop);
      this.upList.push("   ");
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.retryCount += 1;
    this.init();
  }

  init() {
    this.gameCount = 0;
    this.upList = [];
    this.downList = [];
  }
}

module.exports = BridgeGame;
