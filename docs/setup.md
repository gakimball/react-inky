# Setup

## Installation

Install react-inky from npm.

```bash
npm install react-inky react react-dom --save
```

react-inky depends on React 16.3 or higher.

Because react-inky is a React library, you need to compile your code using Babel, specifically with the `env` and `react` presets. If you don't have them already, install those presets into your project with:

```bash
npm install babel-preset-env babel-preset-react --save-dev
```

Your `.babelrc` should look like this:

```json
{
  "presets": ["env", "react"]
}
```

[Learn more about setting up Babel](https://babeljs.io/docs/setup/) if you've never done it before.

## Usage

To convert your React-powered email into a plain HTML email, use ReactDOM's `renderToStaticMarkup()` function, which converts a React component into a string of HTML.

In the below example, our email template component includes a prop, making its contents dynamic.

```jsx
import Inky, { Container, Row, Column } from 'react-inky';
import { renderToStaticMarkup } from 'react-dom/server';

function EmailTemplate({ name }) {
  return (
    <Container>
      <Row>
        <Column>Hello, {name}!</Column>
      </Row>
    </Container>
  );
}

renderToStaticMarkup((
  <Inky>
    <Inky.Head>
      <link rel="stylesheet" href="style.css" />
    </Inky.Head>
    <Inky.Body preview="Preview text">
      <EmailTemplate name="Inky" />
    </Inky.Body>
  </Inky>
));
```

Note that, while most React projects use the HTML5 doctype, email templates use the XHTML Strict doctype. React doesn't add this automatically when rendering, so you'll need to add it before the final HTML of your email template.

The doctype string is included with react-inky:

```jsx
import Inky from 'inky';
import { renderToString } from 'react-dom/server';

const html = Inky.doctype + renderToString(/* Template */);
```

## Configuration

### Grid

To change the column count of the grid, add a `columnCount` prop to the `<Container />` of your email. Remember to also change the `$grid-column-count` variable in your Sass.

```jsx
<Container columnCount={16}>
  {/* ... */}
</Container>
```

### Strict Mode

react-inky aims to recreate the HTML output of the original Inky library exactly. However, there are some instances where we want to make changes to fix bugs that haven't been fixed in the original Inky. To opt in to these changes, add the prop `strictMode={false}` to your `<Container />`.

These are the differences when strict mode is turned off:

- `<Spacer />`: uses a unitless value for the `height` attribute of the `<td />`. Some versions of Outlook don't display Spacers properly if the `height` has a `px` in it.
