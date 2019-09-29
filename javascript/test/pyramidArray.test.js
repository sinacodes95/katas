import { expect } from 'chai';
import { buildPyramid } from '../pyramidArray';

describe('buildPyramid', () => {
  it('is a function', () => {
    expect(typeof buildPyramid).to.equal('function');
  });
  it('return a pyramid', () => {
    expect(buildPyramid(0)).to.eql([]);    
    expect(buildPyramid(1)).to.eql([[1]]);    
    expect(buildPyramid(2)).to.eql([[1],[1, 1]]);    
    expect(buildPyramid(3)).to.eql([[1],[1, 1],[1, 1, 1]]);    
  })
});