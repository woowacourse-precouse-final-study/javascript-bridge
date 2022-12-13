const ERROR = {
  not_number: "숫자를 입력해주세요.",
  out_of_range: "3~20 사이의 숫자를 입력해주세요.",
};

const checkBridgeSize = (size) => {
  if (/[^\d]+/g.test(size)) throw new Error(ERROR.not_number);
  if (size < 3 || size > 20) throw new Error(ERROR.out_of_range);
  return size;
};

module.exports = { checkBridgeSize };
