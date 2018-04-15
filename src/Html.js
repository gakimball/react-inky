import React from 'react';
import PropTypes from 'prop-types';
import Center from './components/Center';

function Inky({children}) {
  return (
    <html xmlns="http://www.w3.org/1999/xhtml">
      {children}
    </html>
  );
}

Inky.propTypes = {children: PropTypes.node};
Inky.defaultProps = {children: null};

function Head({children}) {
  return (
    <head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="viewport" content="width=device-width"/>
      {children}
    </head>
  );
}

Head.propTypes = {children: PropTypes.node};
Head.defaultProps = {children: null};

function Body({children, preview}) {
  return (
    <body>
      {preview && <span className="preheader">{preview}</span>}
      <table className="body" data-made-with-foundation>
        <tr>
          <td is class="float-center" align="center" valign="top">
            <Center>
              {children}
            </Center>
          </td>
        </tr>
      </table>
      {/* Prevent font size manipulation by Gmail on iOS */}
      <div style={{display: 'none', whiteSpace: 'nowrap', font: '15px courier', lineHeight: 0}}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div>
    </body>
  );
}

Body.propTypes = {children: PropTypes.node, preview: PropTypes.string};
Body.defaultProps = {children: null, preview: null};

Inky.Head = Head;
Inky.Body = Body;
Inky.doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">';

export default Inky;
