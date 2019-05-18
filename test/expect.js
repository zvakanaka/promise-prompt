/*
 very short support for expect(expression_here).to.equal(true);
*/
function expect(expression) {
  return {to: {
    equal: expected => {
      const passed = expected === expression;
      console.assert(passed, { expected, got: expression });
    },
    be: {
      at: {
        least: expected => {
          const passed = expression >= expected;
          console.assert(passed, `expected ${expression} to be at least ${expected}`);
        }
      },
      less: {
        than: expected => {
          const passed = expression < expected;
          console.assert(passed, `expected ${expression} to be less than ${expected}`);
        }
      }
    }
  }};
}

function it(should, func) {
  console.log(should);
  func();
}

function describe(message, func) {
  console.group(message)
  console.log(message);
  func();
  console.groupEnd(message);
}

module.exports = {
  expect,
  it,
  describe
};
