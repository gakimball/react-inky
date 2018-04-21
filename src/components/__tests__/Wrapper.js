import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {expect} from 'chai';
import Wrapper from '../Wrapper';

describe('<Wrapper />', () => {
  it('renders a wrapper', () => {
    const wrapper = renderToStaticMarkup(
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
