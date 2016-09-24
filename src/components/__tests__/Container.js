import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import Container from '../Container';

describe('<Container />', () => {
  it('renders a container', () => {
    const wrapper = render(
      <Container className="custom-class">Container</Container>
    );

    expect(wrapper.html()).html.to.equal(`
      <table is="true" align="center" class="container custom-class">
        <tbody>
          <tr>
            <td>Container</td>
          </tr>
        </tbody>
      </table>
    `);
  });
});
