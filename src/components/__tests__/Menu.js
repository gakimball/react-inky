import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import Menu from '../Menu';

describe('<Menu />', () => {
  it('renders a menu', () => {
    const wrapper = render(<Menu className="custom-class">Menu</Menu>);
    expect(wrapper.html()).html.to.equal(`
      <table is="true" class="menu custom-class">
        <tr>
          <td>
            <table>
              <tr>Menu</tr>
            </table>
          </td>
        </tr>
      </table>
    `);
  });
});
