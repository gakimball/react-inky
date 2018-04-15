import React from 'react';
import {expect} from 'chai';
import render from '../../__tests__/util/render';
import Item from '../Item';

describe('<Item />', () => {
  it('renders a menu item', () => {
    const wrapper = render(<Item className="custom-class" href="example.com">Item</Item>);
    expect(wrapper).html.to.equal(`
      <th class="menu-item custom-class">
        <a href="example.com">Item</a>
      </th>
    `);
  });

  it('allows a target to be set', () => {
    const wrapper = render(<Item href="example.com" target="_blank"/>);
    expect(wrapper).html.to.equal(`
      <th class="menu-item">
        <a href="example.com" target="_blank"></a>
      </th>
    `);
  });
});
