# Grid

Use the `<Row />` and `<Column />` components to construct a layout for your email.

## `<Container />`

Your entire email template must be wrapped in the container. Use it as the root-level element when making an email template.

```jsx
import { Container } from 'react-inky';

function EmailTemplate(props) {
  return (
    <Container>
      {/* ... */}
    </Container>
  );
}
```

### Props

- **className:** (String) classes to add to the root table.
- **columnCount:** (Number) column count to use for grids inside of this one. The default is `12`.
- **style:** (Object) styles to add to the root table.

## `<Row />`

Use rows to group a set of columns.

### Props

- **className:** (String) classes to add to the root table.
- **style:** (Object) styles to add to the root table.

## `<Column />`

Use columns to create horizontal sections of content within a grid.

### Props

- **className:** (String) classes to add to the root table.
- **expander:** (Boolean) enable the expander `<th>` inside the column. Defaults to `true`.
- **large:** (String) column width to use on large devices. Defaults to whatever the value of the `small` prop is.
- **small:** (String) column width to use on small devices. Defaults to whatever the global column count is, which is `12` by default.
- **style:** (Object) styles to add to the root table.

## Examples

```jsx
import { Row, Column } from 'react-inky';

const grid =
  <Row>
    <Column large="9">
      <p>This column will be full-width on small devices, and 75% wide on large devices.</p>
    </Column>
    <Column large="3">
      <p>This column will be full-width on small devices, and 25% wide on large devices.</p>
    </Column>
  </Row>
;
```

```jsx
import { Container, Row, Column } from 'react-inky';

const grid =
  <Container columnCount={16}>
    <Row>
      <Column large="8">
        <p>This column will be half-width, because the global column count has been changed to 16.</p>
      </Column>
      <Column large="8">
        <p>This column will be half-width, because the global column count has been changed to 16.</p>
      </Column>
    </Row>
  </Container>
;
```
