export { default as Button } from './components/Button';
export { default as Callout } from './components/Callout';
export { default as Center } from './components/Center';
export { default as Column } from './components/Column';
export { default as Container } from './components/Container';
export { default as Inky } from './components/Inky';
export { default as Item } from './components/Item';
export { default as Menu } from './components/Menu';
export { default as Row } from './components/Row';
export { default as Spacer } from './components/Spacer';
export { default as Wrapper } from './components/Wrapper';

/**
 * Wrap an HTML string in the required boilerplate for Foundation for Emails.
 * @prop {String} [elem=''] HTML to insert.
 * @returns {String} Full HTML email.
 *
 * @example
 * import inky, { Container } from 'react-inky';
 * import { renderToString } from 'react-dom/server';
 *
 * const email = <Container />;
 * inky(renderToString(<Container />));
 */
export default function inky(elem = '') {
  return `
    <!-- Emails use the XHTML Strict doctype -->
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <!-- The character set should be utf-8 -->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width"/>
    <!-- Link to the email's CSS, which will be inlined into the email -->
    <link rel="stylesheet" href="assets/css/foundation-emails.css">
    <style>
      <!-- Your CSS to inline should be added here -->
    </style>
    </head>

    <body>
    <!-- Wrapper for the body of the email -->
    <table class="body" data-made-with-foundation>
      <tr>
        <!-- The class, align, and <center> tag center the container -->
        <td class="float-center" align="center" valign="top">
          <center>
            ${elem}
          </center>
        </td>
      </tr>
    </table>
    </body>
    </html>
  `;
}
