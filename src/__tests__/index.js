import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import chaiHtml from 'chai-html';
import dirtyChai from 'dirty-chai';
import {render} from 'enzyme';
import Inky from '../';

chai.use(chaiEnzyme);
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

    expect(wrapper.html()).html.to.equal(`
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
              <td is="true" class="float-center" align="center" valign="top">
                <center>
                  <div is="true" align="center" class="float-center" />
                </center>
              </td>
            </tr>
          </table>
          <div style="display:none;white-space:nowrap;font:15px courier;line-height:0;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div>
        </body>
      </html>
    `);
  });
});
