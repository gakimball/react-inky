import React from 'react';
import PropTypes from 'prop-types';
import getAttrs from '../util/getAttrs';

export default function Callout(props) {
  return (
    <table is {...getAttrs(props, 'table', 'callout')}>
      <tr>
        <th className="callout-inner">{props.children}</th>
        <th className="expander"></th>
      </tr>
    </table>
  )
}
