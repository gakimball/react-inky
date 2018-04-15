import React, {Children, cloneElement} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Center(props) {
  return (
    <center>
      {/* Add centering attributes and classes to children */}
      {Children.map(props.children, child => {
        return cloneElement(child, {
          align: 'center',
          className: classnames(child.props.className, 'float-center')
        });
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
