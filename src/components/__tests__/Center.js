import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';
import Center from '../Center';
import Menu from '../Menu';

describe('<Center />', () => {
  it('adds align="center" and float-center class to a basic element', () => {
    const wrapper = render(<Center><div/></Center>);
    expect(wrapper.html()).html.to.equal(`
      <center>
        <div is="true" align="center" class="float-center"></div>
      </center>
    `);
  });

  it('adds align="center" and float-center class to a React component', () => {
    const wrapper = render(<Center><Menu/></Center>);
    expect(wrapper.html()).html.to.equal(`
      <center>
        <table is="true" align="center" class="menu float-center">
          <tr>
            <td>
              <table>
                <tr></tr>
              </table>
            </td>
          </tr>
        </table>
      </center>
    `);
  });
});
