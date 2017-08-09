import React from 'react';
import getAttrs from '../util/getAttrs';

export default function Wrapper(props) {
  return (
    <table is align="center" {...getAttrs(props, 'table', 'wrapper')}>
      <tbody>
        <tr>
          <td className="wrapper-inner">{props.children}</td>
        </tr>
      </tbody>
    </table>
  );
}
