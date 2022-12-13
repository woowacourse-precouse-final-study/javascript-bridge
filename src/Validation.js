const ERROR = {
  not_number: "[ERROR] 숫자를 입력해야 합니다.",
  out_of_range: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
};

const checkBridgeSize = (size) => {
  if (/[^\d]+/g.test(size)) throw new Error(ERROR.not_number);
  if (size < 3 || size > 20) throw new Error(ERROR.out_of_range);
  return size;
};

module.exports = { checkBridgeSize };
