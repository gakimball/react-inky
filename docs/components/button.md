# Button

Use buttons to display links to other content.

## Examples

```jsx
import { Button } from 'react-inky';

const button = <Button href="http://zombo.com">Welcome to Zombo.com</Button>;
```

```jsx
const button  = <Button href="http://zombo.com" className="primary expand">
  The Infinite is Possible
</Button>;
```

## Props

- **className:** (String) classes to add to the root table.
- **href:** (String) `href` attribute for the link.
- **style:** (Object) styles to add to the root table.
- **target:** (String) `target` attribute for the link.
