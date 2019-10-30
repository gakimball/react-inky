import React from 'react';
import PropTypes from 'prop-types';
import getAttrs from '../util/getAttrs';
import ContainerContext from '../util/containerContext';

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
const Container = props => {
  const rest = Object.assign({}, props);
  delete rest.columnCount;
  delete rest.strictMode;

  return <ContainerContext.Provider
    value={{
      columnCount: props.columnCount,
      strictMode: props.strictMode
    }}
  >  
    <table align="center" {...getAttrs(rest, 'container')}>
      <tbody>
        <tr>
          <td>{props.children}</td>
        </tr>
      </tbody>
    </table>
  </ContainerContext.Provider>
};

/**
 * Prop types for `<Container />`.
 * @type Object
 * @prop {*} [children] - Child elements.
 * @prop {Number} [columnCount=12] - Global column count.
 * @prop {Boolean} [strictMode] - Match original Inky output exactly.
 */
Container.propTypes = {
  children: PropTypes.node,
  columnCount: PropTypes.number,
  strictMode: PropTypes.bool
};

/**
 * Default props for `<Container />`.
 * @type Object
 */
Container.defaultProps = {
  children: null,
  columnCount: 12,
  strictMode: true
};

export default Container;
