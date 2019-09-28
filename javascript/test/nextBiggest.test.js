import { expect } from 'chai';
import { nextBiggest, isDecending } from '../nextBiggest';

describe('nextBiggest function finds the next biggest integer with the same digits as the number passed', () => {
  it('should return -1 when passed 1111 as all digits are the same and thus no larger integer can be found', () => {
    expect(nextBiggest(1111)).to.equal(-1);
  });
  it('should return -1 when passed 531 as digits are in decending order and no higher number can be produced', () => {
    expect(nextBiggest(531)).to.equal(-1);
  });
  it('should return 21 when passed 12', () => {
    expect(nextBiggest(12)).to.equal(21);
  });
  it('should return 2071 when passed 2017', () => {
    expect(nextBiggest(2017)).to.equal(2071);
  });
  it('should return 441 when passed 414', () => {
    expect(nextBiggest(414)).to.equal(441);
  });
  it('should return 414 when passed 144', () => {
    expect(nextBiggest(144)).to.equal(414);
  });
});

describe('isDecending checks if an array of number is in decending order', () => {
  it('should return true if given an array of ints in decending order', () => {
    expect(isDecending(['5', '3', '1'])).to.be.true;
  });
  it('should return false if given an array of ints in acending order', () => {
    expect(isDecending(['1', '3', '5'])).to.be.false;
  });
})
