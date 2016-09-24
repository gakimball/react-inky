import React from 'react';
import getAttrs from '../util/getAttrs';

/**
 * Top-level container for an email. Use this as the root of your email template.
 *
 * @example
 * <Container>
 *   Lorem ipsum dolor sit amet.
 * </Container>
 */
export default function Container(props) {
  return (
    <table is align="center" {...getAttrs(props, 'table', 'container')}>
      <tbody>
        <tr>
          <td>{props.children}</td>
        </tr>
      </tbody>
    </table>
  );
}
