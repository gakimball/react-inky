import React, { PropTypes } from 'react';
import getAttrs from '../util/getAttrs';
import getColumnClasses from '../util/getColumnClasses';

/**
 * Grid column. Place sections of email content inside these.
 * @todo Remove expander if housing a nested grid
 *
 * @example
 * <Row>
 *   <Column small="12" large="4" first={true}>
 *     Left column
 *   </Column>
 *   <Column small="12" large="8" last={true}>
 *     Right column
 *   </Column>
 * </Row>
 */
export default function Column(props) {
  const classes = getColumnClasses(props);

  return (
    <th is {...getAttrs(props, 'th', classes)}>
      <table>
        <tr>
          <th>{props.children}</th>
          {!props.hasRow && props.expander ? <th className="expander"></th> : null}
        </tr>
      </table>
    </th>
  )
}

/**
 * Props for `<Column />`.
 * @type Object
 * @prop {Boolean} [expander=true] Include expander `<th />` in column.
 * @prop {Boolean} [first=false] Column is the first child.
 * @prop {Boolean} [last=false] Column is the last child.
 * @prop {Boolean} [hasRow=false] Column has a nested row inside of it.
 */
Column.propTypes = {
  expander: PropTypes.bool,
  first: PropTypes.bool,
  last: PropTypes.bool,
  hasRow: PropTypes.bool,
}

/**
 * Default props for `<Column />`.
 * @type Object
 */
Column.defaultProps = {
  expander: true,
  first: false,
  last: false,
  hasRow: false,
}
