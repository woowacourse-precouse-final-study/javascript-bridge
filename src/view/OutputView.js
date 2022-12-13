const { Console } = require('@woowacourse/mission-utils');
const { GAME_GUIDE_MESSAGES, SEPERATOR } = require('../utils/constants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print(GAME_GUIDE_MESSAGES.START);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(currentUserBridge) {
    const { up, down } = currentUserBridge;
    Console.print(`[ ${up.join(` ${SEPERATOR} `)} ]`);
    Console.print(`[ ${down.join(` ${SEPERATOR} `)} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(result) {
    const { trials, isAlive, currentUserBridge } = result;

    Console.print(GAME_GUIDE_MESSAGES.FINAL_RESULT_OUTPUT.MESSAGE);
    this.printMap(currentUserBridge);
    Console.print('\n');
    Console.print(`${GAME_GUIDE_MESSAGES.FINAL_RESULT_OUTPUT.RESULT}${isAlive ? '성공' : '실패'}`);
    Console.print(`${GAME_GUIDE_MESSAGES.FINAL_RESULT_OUTPUT.TRIALS}${trials}`);
  },
};

module.exports = OutputView;
