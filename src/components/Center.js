import React, {Children, cloneElement, isValidElement} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Center(props) {
  return (
    <center>
      {/* Add centering attributes and classes to children */}
      {Children.map(props.children, child => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            ...child.props,
            align: 'center',
            className: classnames(child.props.className, 'float-center')
          });
        }

        return child;
      })}
    </center>
  );
}

Center.propTypes = {
  children: PropTypes.node
};

Center.defaultProps = {
  children: null
};
