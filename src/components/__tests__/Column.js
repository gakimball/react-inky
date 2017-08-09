import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import Column from '../Column';
import Container from '../Container';

describe('<Column />', () => {
  it('creates a basic column', () => {
    const wrapper = render(<Column />);
    expect(wrapper.html()).html.to.equal(`
      <th is="true" class="small-12 large-12 columns">
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
    const wrapper = render(<Column first={true} />);
    expect(wrapper.html()).html.to.equal(`
      <th is="true" class="small-12 large-12 columns first">
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
    const wrapper = render(<Column last={true} />);
    expect(wrapper.html()).html.to.equal(`
      <th is="true" class="small-12 large-12 columns last">
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
    const wrapper = render(<Column expander={false} />);
    expect(wrapper.html()).html.to.equal(`
      <th is="true" class="small-12 large-12 columns">
        <table>
          <tr>
            <th></th>
          </tr>
        </table>
      </th>
    `);
  });

  it('allows for children', () => {
    const wrapper = render(<Column>Column</Column>);
    expect(wrapper.html()).html.to.equal(`
      <th is="true" class="small-12 large-12 columns">
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
    const wrapper = render(<Container columnCount={16}>
        <table>
          <tbody>
            <tr>
              <Column></Column>
            </tr>
          </tbody>
        </table>
      </Container>);
    expect(wrapper.find('.columns').parent().html()).html.to.equal(`
      <th is="true" class="small-16 large-16 columns">
        <table>
          <tr>
            <th></th>
            <th class="expander"></th>
          </tr>
        </table>
      </th>
    `);
  });
});
