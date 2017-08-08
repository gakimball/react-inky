import PropTypes from 'prop-types';
import React from 'react';
import getAttrs from '../util/getAttrs';

export default function Item(props) {
  return (
    <th is {...getAttrs(props, 'th', 'menu-item')}>
      <a href={props.href} target={props.target}>{props.children}</a>
    </th>
  )
}

Item.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
}
