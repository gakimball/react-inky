import classnames from 'classnames';

/**
 * Compile attributes for a component's root element, based on its tag and default class name.
 * @param {Object} props - Component props.
 * @param {Array} excluded - List of excluded attributes.
 * @param {String} className - Component root class name.
 * @returns {Object} Filtered props.
 *
 * @example
 * const props = {
 *   large: 6,
 *   small: 12,
 *   style: { background: 'white' },
 *   className: 'header'
 * }
 *
 * // Only returns "style" and "className", because the other two are custom props
 * // The class "header" is added to the base "row"
 * const attrs = getAttrs(props, ['children'], 'row'); // => { style: ..., className: 'row header' }
 * <table {...attrs}></table>
 */
export default function getAttrs(props, excluded, className = '') {
  // Filter out attributes
  const output = {};
  for (const k in props) {
    if (!excluded.includes(k)) {
      output[k] = props[k];
    }
  }

  // Append class names in props to base classes
  output.className = classnames(className, props.className);

  return output;
}
