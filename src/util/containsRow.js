import { Children } from 'react';

/**
 * Determine if a collection of React elements contains a `<Row />`.
 * @param {ReactElement[]} children - Elements to check.
 * @returns {Boolean} If collection contains a `<Row />`;
 */
export default function containsRow(children) {
  let hasRow = false;

  Children.forEach(children, child => {
    if (child && typeof child.type === 'function' && child.type.name === 'Row') {
      hasRow = true;
    }
  });

  return hasRow;
}
