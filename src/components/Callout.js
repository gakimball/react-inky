import PropTypes from 'prop-types';
import React from 'react';
import getAttrs from '../util/getAttrs';

export default function Callout(props) {
  return (
    <table is {...getAttrs(props, 'table', 'callout')}>
      <tbody>
        <tr>
          <th className="callout-inner">{props.children}</th>
          <th className="expander"></th>
        </tr>
      </tbody>
    </table>
  )
}
