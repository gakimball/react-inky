import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {expect} from 'chai';
import Center from '../Center';
import Menu from '../Menu';

describe('<Center />', () => {
  it('adds align="center" and float-center class to a basic element', () => {
    const wrapper = renderToStaticMarkup(<Center><div/></Center>);
    expect(wrapper).html.to.equal(`
      <center>
        <div  align="center" class="float-center"></div>
      </center>
    `);
  });

  it('adds align="center" and float-center class to a React component', () => {
    const wrapper = renderToStaticMarkup(<Center><Menu/></Center>);
    expect(wrapper).html.to.equal(`
      <center>
        <table align="center" class="menu float-center">
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
