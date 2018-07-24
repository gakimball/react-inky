import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {expect} from 'chai';
import Container from '../Container';

describe('<Container />', () => {
  it('renders a container', () => {
    const wrapper = renderToStaticMarkup(<Container className="custom-class">Container</Container>);

    expect(wrapper).html.to.equal(`
      <table align="center" class="container custom-class">
        <tbody>
          <tr>
            <td>Container</td>
          </tr>
        </tbody>
      </table>
    `);
  });
});
