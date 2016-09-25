import React, { Children, cloneElement } from 'react';
import classnames from 'classnames';
import getAttrs from '../util/getAttrs';

export default function Center(props) {
  return (
    <center>
      {/* Add centering attributes and classes to children */}
      {Children.map(props.children, (child, index) => {
        const isReactElement = typeof child.type === 'function';

        return cloneElement(child, {
          is: true,
          align: 'center',
          [isReactElement ? 'className': 'class']: classnames(child.props.className, 'float-center'),
        });
      })}
    </center>
  );
}
