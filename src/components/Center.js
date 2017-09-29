import React, {Children, cloneElement} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Center(props) {
  return (
    <center>
      {/* Add centering attributes and classes to children */}
      {Children.map(props.children, child => {
        const isReactElement = typeof child.type === 'function';

        return cloneElement(child, {
          is: true,
          align: 'center',
          [isReactElement ? 'className' : 'class']: classnames(child.props.className, 'float-center')
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
