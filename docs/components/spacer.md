# Spacer

Use spacers to create vertical space between two components.

A spacer can be made visible on all devices (using the `size` prop), only on small devices (using the `sizeSm` prop), or only on large devices (using the `sizeLg` prop).

## Props

- **className:** (String) classes to add to the root table.
- **style:** (Object) styles to add to the root table.
- Use only one of the sizing props:
  - **size:** (String) height of a spacer visible on all devices.
  - **sizeSm:** (String) height of a spacer visible on small devices only.
  - **sizeLg:** (String) height of a spacer visible on large devices only.

## Examples

```jsx
import { Container, Callout, Spacer } from 'react-inky';

const spacedThings =
  <Container>
    <Callout>This is a callout.</Callout>
    <Spacer size="16" />
    <Callout>This callout is offset by 16 pixels.</Callout>
  </Container>
```
