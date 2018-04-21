import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {expect} from 'chai';
import Row from '../Row';

describe('<Row />', () => {
  it('renders a row', () => {
    const wrapper = renderToStaticMarkup(
      <Row className="custom-class"><td/></Row>
    );

    expect(wrapper).html.to.equal(`
      <table class="row custom-class">
        <tbody>
          <tr><td></td></tr>
        </tbody>
      </table>
    `);
  });
});
