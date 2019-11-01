import React from 'react';
import PropTypes from 'prop-types';
import getAttrs from '../util/getAttrs';

export default function Wrapper(props) {
  return (
    <table align="center" {...getAttrs(props, ['children'], 'wrapper')}>
      <tr>
        <td className="wrapper-inner">{props.children}</td>
      </tr>
    </table>
  );
}

/**
 * Prop types for `<Wrapper />`.
 * @prop [children] - Child elements.
 */
Wrapper.propTypes = {
  children: PropTypes.node
};

/**
 * Default props for `<Wrapper />`.
 */
Wrapper.defaultProps = {
  children: null
};
