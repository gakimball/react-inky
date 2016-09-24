import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import Wrapper from '../Wrapper';

describe('<Wrapper />', () => {
  it('renders a wrapper', () => {
    const wrapper = render(
      <Wrapper className="custom-class">Wrapper</Wrapper>
    );

    expect(wrapper.html()).html.to.equal(`
      <table is="true" align="center" class="wrapper custom-class">
        <tr>
          <td class="wrapper-inner">Wrapper</td>
        </tr>
      </table>
    `);
  });
});
