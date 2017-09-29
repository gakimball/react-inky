import React from 'react';
import {expect} from 'chai';
import containsRow from '../containsRow';
import Row from '../../components/Row';

describe('containsRow()', () => {
  it('returns false if there are no rows', () => {
    expect(containsRow([<div key={0}/>])).to.be.false();
  });

  it('returns true if there is a row', () => {
    expect(containsRow([<Row key={0}/>, <div key={1}/>])).to.be.true();
  });
});
