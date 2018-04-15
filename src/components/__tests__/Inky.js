import React from 'react';
import {expect} from 'chai';
import render from '../../__tests__/util/render';
import Inky from '../Inky';

describe('<Inky />', () => {
  it('releases the kraken', () => {
    const wrapper = render(<Inky/>);

    expect(wrapper).html.to.equal(`
      <tr>
        <td>
          <img src="https://raw.githubusercontent.com/arvida/emoji-cheat-sheet.com/master/public/graphics/emojis/octopus.png" />
        </td>
      </tr>
    `);
  });
});
