import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {expect} from 'chai';
import Item from '../Item';

describe('<Item />', () => {
  it('renders a menu item', () => {
    const wrapper = renderToStaticMarkup(<Item className="custom-class" href="example.com">Item</Item>);
    expect(wrapper).html.to.equal(`
      <th class="menu-item custom-class">
        <a href="example.com">Item</a>
      </th>
    `);
  });

  it('allows a target to be set', () => {
    const wrapper = renderToStaticMarkup(<Item href="example.com" target="_blank"/>);
    expect(wrapper).html.to.equal(`
      <th class="menu-item">
        <a href="example.com" target="_blank"></a>
      </th>
    `);
  });
});
