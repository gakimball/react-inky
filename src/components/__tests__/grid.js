import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';
import Row from '../Row';
import Column from '../Column';

describe('Grid', () => {
  it('can render nested grids', () => {
    const wrapper = render(
      <Row>
        <Column first last>
          <Row/>
        </Column>
      </Row>
    );

    expect(wrapper.html()).html.to.equal(`
      <table is="true" class="row">
        <tbody>
          <tr>
            <th is="true" class="small-12 large-12 columns first last">
              <table>
                <tr>
                  <th>
                    <table is="true" class="row">
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
    const wrapper = render(
      <Row>
        <Column/>
        <Column/>
      </Row>
    );

    expect(wrapper.html()).html.to.equal(`
      <table is="true" class="row">
        <tbody>
          <tr>
            <th is="true" class="small-12 large-12 columns first">
              <table>
                <tr>
                  <th></th>
                  <th class="expander"></th>
                </tr>
              </table>
            </th>
            <th is="true" class="small-12 large-12 columns last">
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
