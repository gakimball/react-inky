import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {expect} from 'chai';
import Inky from '../Inky';

describe('<Inky />', () => {
  it('releases the kraken', () => {
    const wrapper = renderToStaticMarkup(<Inky/>);

    expect(wrapper).html.to.equal(`
      <tr>
        <td>
          <img src="https://raw.githubusercontent.com/arvida/emoji-cheat-sheet.com/master/public/graphics/emojis/octopus.png" />
        </td>
      </tr>
    `);
  });
});
