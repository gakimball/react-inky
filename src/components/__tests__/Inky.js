import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';
import Inky from '../Inky';

describe('<Inky />', () => {
  it('releases the kraken', () => {
    const wrapper = render(<Inky/>);

    expect(wrapper.html()).html.to.equal(`
      <tr>
        <td>
          <img src="https://raw.githubusercontent.com/arvida/emoji-cheat-sheet.com/master/public/graphics/emojis/octopus.png" />
        </td>
      </tr>
    `);
  });
});
