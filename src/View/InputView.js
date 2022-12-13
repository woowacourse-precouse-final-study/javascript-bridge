const MissionUtils = require("@woowacourse/mission-utils");
const {INPUT_MESSAGE : {bridgeSizeMessage,MovingMessage,GameCommandMessage}} = require('../Constant')
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(size) {
    MissionUtils.Console.readLine(bridgeSizeMessage, size);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(moving) {
    MissionUtils.Console.readLine(
      MovingMessage,
      moving
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(gameCommand) {
    MissionUtils.Console.readLine(
      GameCommandMessage,
      gameCommand
    );
  },
};

module.exports = InputView;
