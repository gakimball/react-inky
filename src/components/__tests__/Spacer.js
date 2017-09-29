import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';
import Spacer from '../Spacer';

describe('<Spacer />', () => {
  it('renders a spacer with a default size', () => {
    const wrapper = render(<Spacer className="custom-class"/>);

    expect(wrapper.html()).html.to.equal(`
      <table is="true" class="spacer custom-class">
        <tbody>
          <tr>
            <td height="16px" style="font-size:16px;line-height:16px;">&#xA0;</td>
          </tr>
        </tbody>
      </table>
    `);
  });

  it('renders a spacer with a specific size', () => {
    const wrapper = render(<Spacer size="10"/>);

    expect(wrapper.html()).html.to.equal(`
      <table is="true" class="spacer">
        <tbody>
          <tr>
            <td height="10px" style="font-size:10px;line-height:10px;">&#xA0;</td>
          </tr>
        </tbody>
      </table>
    `);
  });

  it('creates a small-only spacer', () => {
    const wrapper = render(<Spacer sizeSm="10"/>);

    expect(wrapper.html()).html.to.equal(`
      <table is="true" class="spacer hide-for-large">
        <tbody>
          <tr>
            <td height="10px" style="font-size:10px;line-height:10px;">&#xA0;</td>
          </tr>
        </tbody>
      </table>
    `);
  });

  it('creates a large-only spacer', () => {
    const wrapper = render(<Spacer sizeLg="10"/>);

    expect(wrapper.html()).html.to.equal(`
      <table is="true" class="spacer show-for-large">
        <tbody>
          <tr>
            <td height="10px" style="font-size:10px;line-height:10px;">&#xA0;</td>
          </tr>
        </tbody>
      </table>
    `);
  });
});
