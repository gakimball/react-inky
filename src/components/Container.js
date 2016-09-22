import React from 'react';

export default function Container(props) {
  return (
    <table align="center" className="container">
      <tbody>
        <tr>
          <td>{props.children}</td>
        </tr>
      </tbody>
    </table>
  );
}
