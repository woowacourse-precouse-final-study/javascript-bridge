const { checkBridgeSize } = require("../src/Validation");

describe("다리 길이 입력 유효성 검사", () => {
  test.each([["a"], ["#"], [" "]])(
    "다리 길이가 문자이거나 값이 없으면 예외가 발생한다.",
    (size) => {
      expect(() => {
        checkBridgeSize(size);
      }).toThrow("[ERROR] 숫자를 입력해야 합니다.");
    }
  );
  test.each([["2"], ["21"]])(
    "다리 길이가 3부터 20까지의 숫자가 아니면 예외가 발생한다.",
    (input) => {
      expect(() => {
        checkBridgeSize(input);
      }).toThrow("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    }
  );
  test.each([["3"], ["20"]])(
    "다리 길이가 올바르게 입력되면 아무 문제도 발생하지 않는다.",
    (input) => {
      expect(() => {
        checkBridgeSize(input);
      }).not.toThrow();
    }
  );
});
