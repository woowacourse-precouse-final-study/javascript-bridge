const GAME_GUIDE_MESSAGES = {
	START: '다리 건너기 게임을 시작합니다.\n',
	LENGHT_INPUT: '다리의 길이를 입력해주세요.\n',
	MOVE_INPUT: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
	COMMAND_INPUT: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
	FINAL_RESULT_OUTPUT: {
		MESSAGE: '최종 게임 결과',
		RESULT: '게임 성공 여부: ',
		TRIALS: '총 시도한 횟수: ',
	},
};

const ERROR_MESSAGE = {
	INVALID_NUMBER: '[ERROR] 유효한 숫자를 입력해주세요.',
	INVALID_RANGE: (MIN, MAX) => `[ERROR] ${MIN} 이상 ${MAX} 이하인 숫자를 입력해주세요.`,
	INVALID_INPUT_CHOICE: (choices) => `[ERROR] ${choices.map(choice => choice).join(', ')} 중 하나를 입력해주세요.`
};

const DIRECTION = {
	UP: 'U',
	DOWN: 'D',
};

const COMMAND = {
	RESTART: 'R',
	QUIT: 'Q',
};

const LENGTH_RANGE = {
	MIN: 3,
	MAX: 20,
};

module.exports = {
	GAME_GUIDE_MESSAGES,
	ERROR_MESSAGE,
	DIRECTION,
	COMMAND,
	LENGTH_RANGE,
};
