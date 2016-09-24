import React from 'react';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';
import Container from '../Container';

describe('<Container />', () => {
  it('renders a container', () => {
    const wrapper = render(<Container className="custom-class">Container</Container>);

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

  it('sets context', () => {
    const wrapper = shallow(<Container />);
    expect(wrapper.instance().getChildContext()).to.eql({
      columnCount: 12,
    });
  });

  it('allows global column count to be changed', () => {
    const wrapper = shallow(<Container columnCount={16} />);
    expect(wrapper.instance().getChildContext()).to.eql({
      columnCount: 16,
    });
  });
});
