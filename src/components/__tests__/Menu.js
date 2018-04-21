import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {expect} from 'chai';
import Menu from '../Menu';
import Item from '../Item';
import Center from '../Center';

describe('<Menu />', () => {
  it('renders a menu', () => {
    const wrapper = renderToStaticMarkup(<Menu className="custom-class">Menu</Menu>);

    expect(wrapper).html.to.equal(`
      <table class="menu custom-class">
        <tr>
          <td>
            <table>
              <tr>Menu</tr>
            </table>
          </td>
        </tr>
      </table>
    `);
  });

  it('passes center down to items', () => {
    const wrapper = renderToStaticMarkup(
      <Center>
        <Menu>
          <Item href="#"/>
        </Menu>
      </Center>
    );

    expect(wrapper).html.to.equal(`
      <center>
        <table align="center" class="menu float-center">
          <tr>
            <td>
              <table>
                <tr>
                  <th  class="menu-item float-center">
                    <a href="#"></a>
                  </th>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </center>
    `);
  });
});
