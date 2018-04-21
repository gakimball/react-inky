import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {expect} from 'chai';
import Row from '../Row';
import Column from '../Column';

describe('Grid', () => {
  it('can render nested grids', () => {
    const wrapper = renderToStaticMarkup(
      <Row>
        <Column first last>
          <Row/>
        </Column>
      </Row>
    );

    expect(wrapper).html.to.equal(`
      <table class="row">
        <tbody>
          <tr>
            <th class="small-12 large-12 columns first last">
              <table>
                <tr>
                  <th>
                    <table class="row">
                      <tbody>
                        <tr></tr>
                      </tbody>
                    </table>
                  </th>
                </tr>
              </table>
            </th>
          </tr>
        </tbody>
      </table>
    `);
  });

  it('can detect the first and last child in a row', () => {
    const wrapper = renderToStaticMarkup(
      <Row>
        <Column/>
        <Column/>
      </Row>
    );

    expect(wrapper).html.to.equal(`
      <table class="row">
        <tbody>
          <tr>
            <th class="small-12 large-12 columns first">
              <table>
                <tr>
                  <th></th>
                  <th class="expander"></th>
                </tr>
              </table>
            </th>
            <th class="small-12 large-12 columns last">
              <table>
                <tr>
                  <th></th>
                  <th class="expander"></th>
                </tr>
              </table>
            </th>
          </tr>
        </tbody>
      </table>
    `);
  });
});
