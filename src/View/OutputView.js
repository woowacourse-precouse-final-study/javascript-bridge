const MissionUtils = require("@woowacourse/mission-utils");
const {OUTPUT_RESULT : {separator},OUTPUT_MESSAGE : {gameStartMessage, resultCommandMessage, isSuccessOrFailMessage, totalCountMessage}} = require('../util/Constant')
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  
  printStart(){
    MissionUtils.Console.print(gameStartMessage);
  },
  
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(upList,downList) {
    const result = `[${upList.join(separator)}]\n[${downList.join(separator)}]`;
    MissionUtils.Console.print(`${result}\n`);
    return result;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(result,successOrFail,count) {
    MissionUtils.Console.print(resultCommandMessage(result));
    MissionUtils.Console.print(isSuccessOrFailMessage(successOrFail));
    MissionUtils.Console.print(totalCountMessage(count));

  },
};

module.exports = OutputView;
