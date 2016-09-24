const classnames = require('classnames');

/**
 * Generate CSS classes for a `<Column />`, including the base `columns`, sizing classes, and `first`/`last` classes.
 * @param {Object} props - Component props.
 * @param {Number} [defaultCount=12] - Default column count.
 * @returns {String} Column classes.
 */
export default function getColumnClasses(props, defaultCount = 12) {
  const smallSize = props.small || defaultCount;
  const largeSize = props.large || smallSize;

  return classnames('columns', `small-${smallSize}`, `large-${largeSize}`, {
    first: props.first,
    last: props.last,
  });
}
