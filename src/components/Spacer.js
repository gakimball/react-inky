import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getAttrs from '../util/getAttrs';
import ContainerContext from '../util/containerContext';

const createSpacer = (props, size, state = false) => (
  <ContainerContext.Consumer>
    {({strictMode}) => (
      <table {...getAttrs(props, ['size', 'sizeSm', 'sizeLg', 'children'],
        classnames('spacer', state && `${state}-for-large`))}
      >
        <tbody>
          <tr>
            <td
              height={strictMode ? `${size}px` : size}
              style={{
                fontSize: `${size}px`,
                lineHeight: `${size}px`
              }}
            >
              &nbsp;
            </td>
          </tr>
        </tbody>
      </table>
    )}
  </ContainerContext.Consumer>
);

/**
 * Spacer component to create vertical space between elements.
 *
 * @param {Object} props - Component props.
 * @returns {Object} Spacer HTML.
 *
 * @example
 * <Button href="example.com/signup.html">Sign Up</Button>
 * <Spacer size="10" />
 * <Button href="example.com/learnmore.html">Learn More</Button>
 */
export default function Spacer(props) {
  if (!props.sizeSm && !props.sizeLg) {
    return createSpacer(props, props.size);
  }

  return (
    <>
      {props.sizeSm && createSpacer(props, props.sizeSm, 'hide')}
      {props.sizeLg && createSpacer(props, props.sizeLg, 'show')}
    </>
  );
}

/**
 * Prop types for `<Spacer />`.
 * @type Object
 * @prop {Number} size - Height of spacer in pixels. Using this prop _only_ will create a spacer that displays on all screen sizes.
 * @prop {Number} sizeSm - Height of spacer in pixels. Using this prop creates a spacer that appears only on small screens.
 * @prop {Number} sizeLg - Height of spacer in pixels. Using this prop creates a spacer that appears only on small screens.
 */
Spacer.propTypes = {
  size: PropTypes.number,
  sizeSm: PropTypes.number,
  sizeLg: PropTypes.number
};

/**
 * Default props for `<Spacer />`.
 * @type Object
 */
Spacer.defaultProps = {
  size: 16,
  sizeSm: null,
  sizeLg: null
};
