import React from 'react';
import PropTypes from 'prop-types';
import getAttrs from '../util/getAttrs';

export default function Button(props) {
  const expanded = props.className.match('expand') !== null;

  return (
    <table is {...getAttrs(props, 'table', 'button')}>
      <tr>
        <td>
          <table>
            <tr>
              <td>
                {expanded ?
                  <center><a href={props.href} target={props.target} align="center" className="float-center">{props.children}</a></center> :
                  <a href={props.href} target={props.target}>{props.children}</a>
                }
              </td>
            </tr>
          </table>
        </td>
        {expanded ? <td className="expander"/> : null}
      </tr>
    </table>
  );
}

/**
 * Prop types for `<Button />`.
 * @type Object
 * @prop children - Child elements.
 * @prop {String} className - Extra CSS classes.
 * @prop {String} href - Link destination.
 * @prop {String} target - Link target.
 */
Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  target: PropTypes.string
};

/**
 * Default props for `<Button />`.
 * @type Object
 */
Button.defaultProps = {
  children: null,
  className: '',
  target: null
};
