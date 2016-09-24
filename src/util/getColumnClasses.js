const classnames = require('classnames');

export default function getColumnClasses(props) {
  const smallSize = props.small || 12;
  const largeSize = props.large || smallSize;

  return classnames('columns', `small-${smallSize}`, `large-${largeSize}`, {
    first: props.first,
    last: props.last,
  });
}
