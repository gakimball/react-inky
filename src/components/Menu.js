import React from 'react';
import getAttrs from '../util/getAttrs';

export default function Menu(props) {
  return (
    <table is {...getAttrs(props, 'table', 'menu')}>
      <tr>
        <td>
          <table>
            <tr>{props.children}</tr>
          </table>
        </td>
      </tr>
    </table>
  )
}
