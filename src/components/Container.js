import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getAttrs from '../util/getAttrs';

/**
 * Top-level container for an email. Use this as the root of your email template.
 *
 * @example
 * <Container>
 *   Lorem ipsum dolor sit amet.
 * </Container>
 */
export default class Container extends Component {
  /**
   * Create child context.
   * @returns {ContainerChildContext} Child context.
   */
  getChildContext() {
    /**
     * Context accessible to children of `<Container />`.
     * @typedef {Object} ContainerChildContext
     * @prop {Number} columnCount - Global column count.
     */
    return {
      columnCount: this.props.columnCount,
    }
  }

  /**
   * Render a container.
   * @returns {JSX}
   */
  render() {
    return (
      <table is align="center" {...getAttrs(this.props, 'table', 'container')}>
        <tbody>
          <tr>
            <td>{this.props.children}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

/**
 * Prop types for `<Container />`.
 * @type Object
 * @prop {Number} [columnCount=12] Global column count.
 */
Container.propTypes = {
  columnCount: PropTypes.number,
}

/**
 * Default props for `<Container />`.
 * @type Object
 */
Container.defaultProps = {
  columnCount: 12,
}

/**
 * Context to be passed down to child elements.
 * @type Object
 * @prop {Number} columnCount - Global column count accessible by `<Column />`.
 */
Container.childContextTypes = {
  columnCount: PropTypes.number,
}
