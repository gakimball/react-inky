import {renderToString} from 'react-dom/server';

/**
 * Render a React tree to a string, and then strip out all of the stuff React adds to the HTML.
 * Used to do equality tests.
 * @param {Object} elem - React tree to render.
 * @returns {String} Cleaned-up HTML.
 */
export default function render(elem) {
  return renderToString(elem)
    // Remove data attributes
    .replace(/\s?data-react.+?=".*?"/g, '')
    // Remove text node comments
    .replace(/<!-- \/?react-text(: \d+)? -->/g, '');
}
