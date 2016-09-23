import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import inky from '../';

chai.use(chaiEnzyme);

describe('inky()', () => {
  const input = '<div></div>';
  let output;

  before(() => {
    output = inky(input);
  });

  it('returns a string', () => {
    expect(output).to.be.a('string');
  });

  it('contains input HTML', () => {
    expect(output).to.contain(input);
  })
});
