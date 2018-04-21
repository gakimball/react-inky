/* eslint-disable no-irregular-whitespace */

import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {expect} from 'chai';
import Spacer from '../Spacer';

describe('<Spacer />', () => {
  it('creates a spacer element with correct size', () => {
    const wrapper = renderToStaticMarkup(<Spacer size={10}/>);

    // Caution: the space inside <td> is a non-breaking space
    expect(wrapper).html.to.equal(`
      <table class="spacer">
        <tbody>
          <tr>
            <td height="10px" style="font-size:10px;line-height:10px"> </td>
          </tr>
        </tbody>
      </table>
    `);
  });

  it('creates a spacer with a default size or no size defined', () => {
    const wrapper = renderToStaticMarkup(<Spacer/>);

    // Caution: the space inside <td> is a non-breaking space
    expect(wrapper).html.to.equal(`
      <table class="spacer">
        <tbody>
          <tr>
            <td height="16px" style="font-size:16px;line-height:16px"> </td>
          </tr>
        </tbody>
      </table>
    `);
  });

  it('creates a spacer element for small screens with correct size', () => {
    const wrapper = renderToStaticMarkup(<Spacer sizeSm={10}/>);

    // Caution: the space inside <td> is a non-breaking space
    expect(wrapper).html.to.equal(`
      <table class="spacer hide-for-large">
        <tbody>
          <tr>
            <td height="10px" style="font-size:10px;line-height:10px"> </td>
          </tr>
        </tbody>
      </table>
    `);
  });

  it('creates a spacer element for large screens with correct size', () => {
    const wrapper = renderToStaticMarkup(<Spacer sizeLg={20}/>);

    // Caution: the space inside <td> is a non-breaking space
    expect(wrapper).html.to.equal(`
      <table class="spacer show-for-large">
        <tbody>
          <tr>
            <td height="20px" style="font-size:20px;line-height:20px"> </td>
          </tr>
        </tbody>
      </table>
    `);
  });

  it('creates a spacer element for small and large screens with correct sizes', () => {
    const wrapper = renderToStaticMarkup(<Spacer sizeSm={10} sizeLg={20}/>);

    // Caution: the space inside <td> is a non-breaking space
    expect(wrapper).html.to.equal(`
      <table class="spacer hide-for-large">
        <tbody>
          <tr>
            <td height="10px" style="font-size:10px;line-height:10px"> </td>
          </tr>
        </tbody>
      </table>
      <table class="spacer show-for-large">
        <tbody>
          <tr>
            <td height="20px" style="font-size:20px;line-height:20px"> </td>
          </tr>
        </tbody>
      </table>
    `);
  });

  it('copies classes to the final spacer HTML', () => {
    const wrapper = renderToStaticMarkup(<Spacer size={10} className="bgColor"/>);

    // Caution: the space inside <td> is a non-breaking space
    expect(wrapper).html.to.equal(`
      <table class="spacer bgColor">
        <tbody>
          <tr>
            <td height="10px" style="font-size:10px;line-height:10px"> </td>
          </tr>
        </tbody>
      </table>
    `);
  });
});
