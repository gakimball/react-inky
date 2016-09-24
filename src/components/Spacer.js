import React, { PropTypes } from 'react';
import classnames from 'classnames';
import getAttrs from '../util/getAttrs';

/**
 * Spacer component to create vertical space between elements.
 *
 * @example
 * <Button href="example.com/signup.html">Sign Up</Button>
 * <Spacer size="10" />
 * <Button href="example.com/learnmore.html">Learn More</Button>
 */
export default function Spacer(props) {
  const classes = classnames('spacer', {
    'hide-for-large': props.sizeSm,
    'show-for-large': props.sizeLg,
  });

  const size = props.sizeLg || props.sizeSm || props.size;

  return (
    <table is {...getAttrs(props, 'table', classes)}>
      <tbody>
        <tr>
          <td height={`${size}px`} style={{
            fontSize: `${size}px`,
            lineHeight: `${size}px`,
          }}>&#xA0;</td>
        </tr>
      </tbody>
    </table>
  )
}

/**
 * Prop types for `<Spacer />`,
 * @type Object
 * @prop {String} [size='16'] Height of spacer in pixels.
 * @prop {String} sizeSm - Height of spacer in pixels, and it will only appear on small screens.
 * @prop {String} sizeLg - Height of spacer in pixels, and it will only appear on large screens.
 */
Spacer.propTypes = {
  size: PropTypes.string,
  sizeSm: PropTypes.string,
  sizeLg: PropTypes.string,
}

Spacer.defaultProps = {
  size: '16',
}
