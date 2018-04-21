import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {expect} from 'chai';
import Column from '../Column';
import Container from '../Container';

describe('<Column />', () => {
  it('creates a basic column', () => {
    const wrapper = renderToStaticMarkup(<Column/>);
    expect(wrapper).html.to.equal(`
      <th class="small-12 large-12 columns">
        <table>
          <tr>
            <th></th>
            <th class="expander"></th>
          </tr>
        </table>
      </th>
    `);
  });

  it('renders a column with first class', () => {
    const wrapper = renderToStaticMarkup(<Column first/>);
    expect(wrapper).html.to.equal(`
      <th class="small-12 large-12 columns first">
        <table>
          <tr>
            <th></th>
            <th class="expander"></th>
          </tr>
        </table>
      </th>
    `);
  });

  it('renders a column with last class', () => {
    const wrapper = renderToStaticMarkup(<Column last/>);
    expect(wrapper).html.to.equal(`
      <th class="small-12 large-12 columns last">
        <table>
          <tr>
            <th></th>
            <th class="expander"></th>
          </tr>
        </table>
      </th>
    `);
  });

  it('allows expander to be removed', () => {
    const wrapper = renderToStaticMarkup(<Column expander={false}/>);
    expect(wrapper).html.to.equal(`
      <th class="small-12 large-12 columns">
        <table>
          <tr>
            <th></th>
          </tr>
        </table>
      </th>
    `);
  });

  it('allows for children', () => {
    const wrapper = renderToStaticMarkup(<Column>Column</Column>);
    expect(wrapper).html.to.equal(`
      <th class="small-12 large-12 columns">
        <table>
          <tr>
            <th>Column</th>
            <th class="expander"></th>
          </tr>
        </table>
      </th>
    `);
  });

  it('can use context of <Container />', () => {
    const wrapper = renderToStaticMarkup(<Container columnCount={16}><Column/></Container>);
    expect(wrapper).html.to.equal(`
      <table  align="center" class="container">
        <tbody>
          <tr>
            <td>
              <th class="small-16 large-16 columns">
                <table>
                  <tr>
                    <th></th>
                    <th class="expander"></th>
                  </tr>
                </table>
              </th>
            </td>
          </tr>
        </tbody>
      </table>
    `);
  });
});
