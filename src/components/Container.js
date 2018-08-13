import React from 'react';
import PropTypes from 'prop-types';
import getAttrs from '../util/getAttrs';
import GridContext from '../util/gridContext';

/**
 * Top-level container for an email. Use this as the root of your email template.
 *
 * @param {Object} props - Component props.
 * @returns {Object} Container HTML.
 *
 * @example
 * <Container>
 *   Lorem ipsum dolor sit amet.
 * </Container>
 */
const Container = props => (
  <GridContext.Provider value={props.columnCount}>
    <table align="center" {...getAttrs(props, 'table', 'container')}>
      <tbody>
        <tr>
          <td>{props.children}</td>
        </tr>
      </tbody>
    </table>
  </GridContext.Provider>
);

/**
 * Prop types for `<Container />`.
 * @type Object
 * @prop [children] Child elements.
 * @prop {Number} [columnCount=12] Global column count.
 */
Container.propTypes = {
  children: PropTypes.node,
  columnCount: PropTypes.number
};

/**
 * Default props for `<Container />`.
 * @type Object
 */
Container.defaultProps = {
  children: null,
  columnCount: 12
};

export default Container;
