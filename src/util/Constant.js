const INPUT_MESSAGE = {
  bridgeSizeMessage : "다리의 길이를 입력해주세요.\n",
  movingMessage : "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  gameCommandMessage : "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n"
}

const OUTPUT_MESSAGE = {
  gameStartMessage : "다리 건너기 게임을 시작합니다.\n",
  resultCommandMessage : (result) => `최종 게임 결과\n${result}\n`,
  isSuccessOrFailMessage : (successOrFail) => `\n게임 성공 여부: ${successOrFail}`,
  totalCountMessage : (count) => `총 시도한 횟수: ${count}`
}

const OUTPUT_RESULT = {
  right : " O ",
  wrong : " X ",
  separator : "|"
}

const UPMOVE_DOWNMOVE_MESSAGE = {
  upMove : "U",
  downMove : "D"
}

const RETRY_STOP_MESSAGE = {
  retry : "R",
  stop : "Q"
}

const SUCCESS_FAIL_MESSAGE = {
  success : "성공",
  fail : "실패"
}

const ERROR_MESSAGE = {
  errorSizeMessage : "[ERROR] 3과 20사이의 숫자만 입력하세요.",
  errorNumberMessage :"[ERROR] 숫자만 입력하세요.",
  errorUOrDMessage : '[ERROR] "U" 또는 "D"만 입력가능합니다.',
  errorROrQMessage : '[ERROR] "R" 또는 "Q"만 입력가능합니다.'
}


module.exports = {INPUT_MESSAGE,OUTPUT_MESSAGE,OUTPUT_RESULT,RETRY_STOP_MESSAGE,SUCCESS_FAIL_MESSAGE,UPMOVE_DOWNMOVE_MESSAGE, ERROR_MESSAGE}
