import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import Callout from '../Callout';

describe('<Callout />', () => {
  it('renders a callout', () => {
    const wrapper = render(<Callout className="custom-class">Callout</Callout>);

    expect(wrapper.html()).html.to.equal(`
      <table is="true" class="callout custom-class">
        <tr>
          <th class="callout-inner">Callout</th>
          <th class="expander"></th>
        </tr>
      </table>
    `);
  });
});
