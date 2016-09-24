import React, { Children, cloneElement } from 'react';
import getAttrs from '../util/getAttrs';

/**
 * Grid row. Use this to define a grid containing a set of columns.
 *
 * @example
 * <Row>
 *   <Column></Column>
 * </Row>
 */
export default function Row(props) {
  return (
    <table is {...getAttrs(props, 'table', 'row')}>
      <tbody>
        {/* `first` and `last` props are added to the first and last child in the row, respectively */}
        <tr>{Children.map(props.children, (child, index) => cloneElement(child, {
          first: index === 0,
          last: index === Children.count(props.children) - 1,
        }))}</tr>
      </tbody>
    </table>
  );
}
