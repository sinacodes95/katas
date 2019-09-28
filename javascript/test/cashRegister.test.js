import { expect } from 'chai';
import { checkCashRegister } from '../cashRegister';

describe('checkCashRegister function', () => {
  it('should exist', () => {
    expect(typeof(checkCashRegister)).to.equal('function');
  });

  it('should return { status:"INSUFFICIENT_FUNDS", change: []} when change cid is less than change due', () => {
    const result = checkCashRegister(100, 2000, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
    expect(result.status).to.equal("INSUFFICIENT_FUNDS");
  });

  it('should pass tests', () => {
    const result = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
    const expected = {status: "OPEN", change: [["QUARTER", 0.5]]}
    expect(result).to.deep.equal(expected);
  })

  it('should fcc tests', () => {
    const result = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
    const expected = {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
    expect(result).to.deep.equal(expected);
  })
});