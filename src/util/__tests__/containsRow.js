import React from 'react';
import { expect } from 'chai';
import containsRow from '../containsRow';
import Row from '../../components/Row';

describe('containsRow()', () => {
  it('returns false if there are no rows', () => {
    expect(containsRow([<div />])).to.be.false;
  });

  it('returns true if there is a row', () => {
    expect(containsRow([<Row />, <div />])).to.be.true;
  });
});
