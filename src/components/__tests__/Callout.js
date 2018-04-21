import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {expect} from 'chai';
import Callout from '../Callout';

describe('<Callout />', () => {
  it('renders a callout', () => {
    const wrapper = renderToStaticMarkup(<Callout className="custom-class">Callout</Callout>);

    expect(wrapper).html.to.equal(`
      <table class="callout custom-class">
        <tr>
          <th class="callout-inner">Callout</th>
          <th class="expander"></th>
        </tr>
      </table>
    `);
  });
});
