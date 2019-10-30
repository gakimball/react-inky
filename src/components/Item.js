import React from 'react';
import PropTypes from 'prop-types';
import getAttrs from '../util/getAttrs';

export default function Item(props) {
  return (
    <th {...getAttrs(props, 'menu-item')}>
      <a href={props.href} target={props.target}>{props.children}</a>
    </th>
  );
}

/**
 * Prop types for `<Item />`.
 * @type Object
 * @prop {String} href - Destination for menu item link.
 * @prop {String} [target] - Link target.
 */
Item.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.node
};

/**
 * Default props for `<Item />`.
 * @type Object
 */
Item.defaultProps = {
  target: null,
  children: null
};
