const GAME_OUTCOME = {
  success: '최종 성공',
  move: '이동',
  fail: '실패',
};

const GAME_COMMAND = {
  restart: 'R',
  quit: 'Q'
};

const LETTER_SIGN = {
  RIGHT: 'O',
  WRONG: 'X',
  BLANK: ' ',
  CONNECTING_LETTER: ' | ',
};

const DIRECTION = {
  UP: 'U',
  DOWN: 'D'
};

const OUTPUT = {
  FINAL_GAME_RESULT: '\n최종 게임 결과',
  GAME_SUCCESS_OR_NOT: (outcome) => `게임 성공 여부: ${outcome}`,
  TOTAL_ATTEMPT_NUMBER: (attemptNumber) => `총 시도한 횟수: ${attemptNumber}`
};


module.exports = {GAME_OUTCOME, GAME_COMMAND, LETTER_SIGN, DIRECTION, OUTPUT}