import React from 'react';
import PropTypes from 'prop-types';
import getAttrs from '../util/getAttrs';

export default function Callout(props) {
  return (
    <table is {...getAttrs(props, 'table', 'callout')}>
      <tr>
        <th className="callout-inner">{props.children}</th>
        <th className="expander"/>
      </tr>
    </table>
  );
}

/**
 * Prop types for `<Callout />`.
 * @type Object
 * @prop [children] - Child elements.
 */
Callout.propTypes = {
  children: PropTypes.node
};

/**
 * Default props for `<Callout />`.
 * @type Object
 */
Callout.defaultProps = {
  children: null
};
