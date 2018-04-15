/* eslint-disable no-irregular-whitespace */

import React from 'react';
import chai, {expect} from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiHtml from 'chai-html';
import dirtyChai from 'dirty-chai';
import Inky from '../';
import render from './util/render';

Enzyme.configure({
  adapter: new Adapter()
});
chai.use(chaiHtml);
chai.use(dirtyChai);

describe('Inky', () => {
  it('renders the boilerplate of an email', () => {
    const wrapper = render((
      <Inky>
        <Inky.Head>
          <link rel="stylesheet" href="style.css"/>
        </Inky.Head>
        <Inky.Body preview="Preview text">
          <div/>
        </Inky.Body>
      </Inky>
    ));

    // Caution: the contents of the last <div> are a mix of regular spaces and non-breaking spaces
    expect(wrapper).html.to.equal(`
      <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width" />
          <link rel="stylesheet" href="style.css" />
        </head>
        <body>
          <span class="preheader">Preview text</span>
          <table class="body" data-made-with-foundation="true">
            <tr>
              <td class="float-center" align="center" valign="top">
                <center>
                  <div align="center" class="float-center"></div>
                </center>
              </td>
            </tr>
          </table>
          <div style="display:none;white-space:nowrap;font:15px courier;line-height:0">                                                             </div>
        </body>
      </html>
    `);
  });
});
