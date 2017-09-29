import {expect} from 'chai';
import getAttrs from '../getAttrs';

describe('getAttrs()', () => {
  let output;

  before(() => {
    const props = {
      large: 6,
      small: 12,
      style: {background: 'white'},
      className: 'header',
      align: 'center'
    };
    output = getAttrs(props, 'table', 'row');
  });

  it('returns an object', () => {
    expect(output).to.be.an('object');
  });

  it('filters out custom props', () => {
    expect(output).to.have.all.keys(['style', 'class', 'align']);
  });

  it('adds class names', () => {
    expect(output.class).to.equal('row header');
  });

  it('adds align manually', () => {
    expect(output.align).to.equal('center');
  });
});
