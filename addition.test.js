const { add } = require("./addition")

test('1+3 = 4', () => {
    expect(add(1,3)).toBe(4)
})