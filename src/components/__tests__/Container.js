import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Container from '../Container';

describe('<Container />', () => {
  it('renders a table', () => {
    const wrapper = shallow(<Container />);
    expect(wrapper.find('table')).to.have.lengthOf(1);
  });
});
