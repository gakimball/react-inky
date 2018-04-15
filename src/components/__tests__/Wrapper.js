import React from 'react';
import {expect} from 'chai';
import render from '../../__tests__/util/render';
import Wrapper from '../Wrapper';

describe('<Wrapper />', () => {
  it('renders a wrapper', () => {
    const wrapper = render(
      <Wrapper className="custom-class">Wrapper</Wrapper>
    );

    expect(wrapper).html.to.equal(`
      <table align="center" class="wrapper custom-class">
        <tr>
          <td class="wrapper-inner">Wrapper</td>
        </tr>
      </table>
    `);
  });
});
