import React from 'react';
import getAttrs from '../util/getAttrs';

export default function Container(props) {
  return (
    <table is align="center" {...getAttrs(props, 'table', 'container')}>
      <tbody>
        <tr>
          <td>{props.children}</td>
        </tr>
      </tbody>
    </table>
  );
}
