import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import Row from '../Row';

describe('<Row />', () => {
  it('renders a row', () => {
    const wrapper = render(
      <Row className="custom-class"><td is={true}></td></Row>
    );

    expect(wrapper.html()).html.to.equal(`
      <table is="true" class="row custom-class">
        <tbody>
          <tr><td is="true" first="true" last="true"></td></tr>
        </tbody>
      </table>
    `);
  });
});
