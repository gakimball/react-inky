import React from 'react';
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
        <tr>{props.children}</tr>
      </tbody>
    </table>
  );
}
