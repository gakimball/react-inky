# Menu

Use menus to display horizontal or vertical lists of links.

## `<Menu />`

Use the menu component to house a set of items.

### Props

- **className:** (String) classes to add to the root table.
- **style:** (Object) styles to add to the root table.

## `<Item />`

Use the item component to create a link within a menu.

### Props

- **className:** (String) classes to add to the root table.
- **href:** (String) `href` attribute for the link.
- **style:** (Object) styles to add to the root table.
- **target:** (String) `target` attribute for the link.

## Examples

```jsx
import { Menu, Item } from 'react-inky';

const menu =
  <Menu>
    <Item href="http://zombo.com">Link One</Item>
    <Item href="http://zombo.com">Link Two</Item>
    <Item href="http://zombo.com">Link Three</Item>
  </Menu>
;
```
