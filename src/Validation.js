const ERROR = {
  not_number: "[ERROR] 숫자를 입력해야 합니다.",
  out_of_range: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  not_u_or_d: '[ERROR] 이동할 칸은 U나 D만 입력할 수 있습니다.',
  not_uppercase: '[ERROR] 대문자로 입력해주세요.',
  not_r_or_q: '[ERROR] R이나 Q만 입력할 수 있습니다.'
};

const checkBridgeSize = (size) => {
  if (/[^\d]+/g.test(size)) throw new Error(ERROR.not_number);
  if (size < 3 || size > 20) throw new Error(ERROR.out_of_range);
  return size;
};

const checkMovingSpace = (space) => {
  if (space === 'u' || space === 'd') 
      throw new Error(ERROR.not_uppercase)
    if (/[^UD]/g.test(space) || space.length !== 1) 
      throw new Error(ERROR.not_u_or_d);
  return space;
}

const checkGameCommand = (command) => {
    if (command === 'r' || command === 'q') {
      throw new Error(ERROR.not_uppercase);
    }
    if (/[^RQ]/g.test(command) || command.length !== 1) 
      throw new Error(ERROR.not_r_or_q);
    return command;
}

module.exports = { checkBridgeSize, checkMovingSpace, checkGameCommand };
