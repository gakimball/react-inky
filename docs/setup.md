# Setup

## Installation

Install react-inky from npm.

```bash
npm install react-inky --save
```

Because react-inky is a React library, you need to compile your code using Babel, specifically with the `latest` and `react` presets. If you don't have them already, install those presets into your project with:

```bash
npm install babel-preset-latest babel-preset-react --save-dev
```

Your `.babelrc` should look like this:

```json
{
  "presets": ["latest", "react"]
}
```

[Learn more about setting up Babel](https://babeljs.io/docs/setup/) if you've never done it before.

## Usage

To convert your React-powered email into a plain HTML email, use ReactDOM's `renderToString()` function, which converts a React component into static HTML.

In the below example, our email template component includes a prop, making its contents dynamic.

```jsx
import { Container, Row, Column } from 'react-inky';
import { renderToString } from 'react-dom/server';

function EmailTemplate({ name }) {
  return (
    <Container>
      <Row>
        <Column>Hello, {name}!</Column>
      </Row>
    </Container>
  );
}

const template = <EmailTemplate name="Inky" />;
renderToString(template); // => <table class="container">...</table>
```

This isn't quite enough, however. The `<Container />` component doesn't include the boilerplate required to build a full HTML email: the doctype, `<html>`, `<head>`, `<body>` and so on. JSX can't render an HTML doctype, and since the boilerplate rarely changes anyway, react-inky bundles it into a function.

Pass your email template to the `inky()` function *before* passing it to `renderToString()`. The `inky()` function will wrap your email in the Foundation for Emails boilerplate.

```jsx
import inky, { Container, Row, Column } from 'react-inky';
import { renderToString } from 'react-dom/server';

function EmailTemplate({ name }) {
  return (
    <Container>
      <Row>
        <Column>Hello, {name}!</Column>
      </Row>
    </Container>
  );
}

const template = <EmailTemplate name="Inky" />;
renderToString(inky(template)); // => <!DOCTYPE html PUBLIC...
```
