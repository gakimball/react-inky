import PropTypes from 'prop-types';
import React from 'react';
import getAttrs from '../util/getAttrs';

export default function Button(props) {
  const expanded = props.className.match('expand') !== null;

  return (
    <table is {...getAttrs(props, 'table', 'button')}>
      <tbody>
        <tr>
          <td>
            <table>
              <tbody>
                <tr>
                  <td>
                    {expanded
                      ? <center><a is href={props.href} target={props.target} align="center" class="float-center">{props.children}</a></center>
                      : <a href={props.href} target={props.target}>{props.children}</a>
                    }
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          {expanded ? <td className="expander"></td> : null}
        </tr>
      </tbody>
    </table>
  )
}

/**
 * Prop types for `<Button />`.
 * @type Object
 * @prop {String} href - Link destination.
 */
Button.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
}

Button.defaultProps = {
  className: '',
}
