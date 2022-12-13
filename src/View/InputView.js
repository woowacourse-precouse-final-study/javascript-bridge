const {Console} = require('@woowacourse/mission-utils');
const INPUT_QUERY = {
  bridge_size: '다리의 길이를 입력해주세요\n',
  moving_space: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  game_command: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n'
}
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeSizeCallback) {
    Console.readLine(INPUT_QUERY.bridge_size, (size) => {
      bridgeSizeCallback(size)
    }) 
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(movingSpaceCallback) {
    Console.readLine(INPUT_QUERY.moving_space, (space) => {
      movingSpaceCallback(space);
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(gameCommandCallback) {
    Console.readLine(INPUT_QUERY.game_command, (command) => {
      gameCommandCallback(command);
    })
  },
};

module.exports = InputView;
