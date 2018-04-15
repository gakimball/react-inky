# Spacer

Use spacers to create vertical space between two components.

Spacers work differently depending on which props you use.

- If you use `size` _only_, the spacer will display on all screen sizes.
- If you use `sizeSm` _only_, the spacer will display on small screens only.
- If you use `sizeLg` _only_, the spacer will display on large screens only.
- If you use `sizeSm` _and_ `sizeLg`, the spacer will change height between screen sizes.

## Props

- **className:** (String) classes to add to the root table.
- **style:** (Object) styles to add to the root table.
- **size:** (String) height of a spacer visible on all devices.
- **sizeSm:** (String) height of a spacer visible on small devices only.
- **sizeLg:** (String) height of a spacer visible on large devices only.

## Examples

```jsx
import { Container, Callout, Spacer } from 'react-inky';

const spacedThings =
  <Container>
    <Callout>This is a callout.</Callout>
    <Spacer size={16} />
    <Callout>This callout is offset by 16 pixels.</Callout>
  </Container>
```
