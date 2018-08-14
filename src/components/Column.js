import React from 'react';
import PropTypes from 'prop-types';
import containsRow from '../util/containsRow';
import getAttrs from '../util/getAttrs';
import getColumnClasses from '../util/getColumnClasses';
import ContainerContext from '../util/containerContext';

/**
 * Grid column. Place sections of email content inside these.
 * @todo Remove expander if housing a nested grid
 *
 * @param {Object} props - Component props.
 * @returns {Object} Column HTML.
 *
 * @example
 * <Row>
 *   <Column small="12" large="4">
 *     Left column
 *   </Column>
 *   <Column small="12" large="8">
 *     Right column
 *   </Column>
 * </Row>
 */
export default function Column(props) {
  const hasRow = containsRow(props.children);

  return (
    <ContainerContext.Consumer>
      {({columnCount}) => (
        <th {...getAttrs(props, 'th', getColumnClasses(props, columnCount))}>
          <table>
            <tr>
              <th>{props.children}</th>
              {!hasRow && props.expander ? <th className="expander"/> : null}
            </tr>
          </table>
        </th>
      )}
    </ContainerContext.Consumer>
  );
}

/**
 * Props for `<Column />`.
 * @type Object
 * @type {String} small - Width on small screens.
 * @type {String} large - Width on large screens.
 * @prop {Boolean} [expander=true] Include expander `<th />` in column.
 * @prop {Boolean} [first=false] Column is the first child.
 * @prop {Boolean} [last=false] Column is the last child.
 * @prop [children] - Child elements.
 */
Column.propTypes = {
  small: PropTypes.string,
  large: PropTypes.string,
  expander: PropTypes.bool,
  first: PropTypes.bool,
  last: PropTypes.bool,
  children: PropTypes.node
};

/**
 * Default props for `<Column />`.
 * @type Object
 */
Column.defaultProps = {
  expander: true,
  first: false,
  last: false,
  children: null,
  small: null,
  large: null
};
