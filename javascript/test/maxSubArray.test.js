import { expect } from "chai";
import { maxSubArray } from "../maxSubArray";

describe("maxSubArray function", () => {
  it("should return 0 when all numbers are negative", () => {
    const testArr = [-1, -1, -2, -8, -5];
    const result = maxSubArray(testArr);
    const expected = 0;

    expect(expected).to.equal(result);
  });

  it("should return a sum of all number when all numbers are positive", () => {
    const testArr = [1, 1, 2, 8, 5];
    const result = maxSubArray(testArr);
    const expected = 17;

    expect(expected).to.equal(result);
  });

  it("should return the sum of the max sub array when arr contains both positive and negative numbers", () => {
    const testArr = [
      30,
      32,
      -20,
      6,
      10,
      8,
      -1,
      48,
      -38,
      -44,
      11,
      -47,
      -37,
      -23,
      24,
      30,
      -19,
      -9,
      44,
      -16,
      29,
      17,
      -43,
      29,
      6,
      -30,
      -10,
      25,
      1,
      -35,
      31,
      4,
      48,
      -8,
      32,
      14,
      -12,
      -11,
      41,
      19,
      -33,
      29,
      24
    ];
    const result = maxSubArray(testArr);
    const expected = 221;

    expect(expected).to.equal(result);
  });
});
