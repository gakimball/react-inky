import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';
import Row from '../Row';

describe('<Row />', () => {
  it('renders a row', () => {
    const wrapper = render(
      <Row className="custom-class"><td/></Row>
    );

    expect(wrapper.html()).html.to.equal(`
      <table is="true" class="row custom-class">
        <tbody>
          <tr><td></td></tr>
        </tbody>
      </table>
    `);
  });
});
