const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("sum(1,2) = 3", () => {
    expect(lib.sum([1, 2])).toBe(3);
});

test("avg(-5,5) = 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});

test("max(0,3,2) = 3", () => {
    expect(lib.max([0, 3, 2])).toBe(3);
});