import {filterPropsFor} from 'react-attrs-filter';
import classnames from 'classnames';

/**
 * Compile attributes for a component's root element, based on its tag and default class name.
 * @param {Object} props - Component props.
 * @param {String} tag - Component root element.
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
 * const attrs = getAttrs(props, 'table', 'row'); // => { style: ..., className: 'row header' }
 * <table {...attrs}></table>
 */
export default function getAttrs(props, tag, className = '') {
  // Filter out non-HTML attributes
  const output = filterPropsFor(props, tag);

  // Append class names in props to base classes
  output.class = classnames(className, props.className);

  // `style` isn't included in `filterPropsFor` and must be copied manually
  if (props.style) {
    output.style = props.style;
  }

  // Same with `align` and `valign`, since they are deprecated attributes
  if (props.align) {
    output.align = props.align;
  }
  if (props.valign) {
    output.valign = props.valign;
  }

  return output;
}
