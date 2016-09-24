# Differences from Inky

react-inky references the test suite for the Node version of Inky directly, and the custom tags and attributes are all the same. However, due to some limitations in React's handling of HTML, react-inky handles a few components slightly different.

## is="true"

You'll see the attribute `is="true"` on the root elements of many components. Adding the `is` attribute to an element bypasses React's checks for what attributes are valid on an element. Many Foundation for Emails components use `align`, and other deprecated HTML attributes. Normally, React will throw a warning and strip these attributes when you try to add them. Adding `is` to an element tells React to skip attribute checking.

The presence of `is="true"` won't affect how email clients render the HTML, but it does make the HTML output slightly different from Inky.

## First and Last Columns

In Inky, special `first` and `last` CSS classes are automatically added to the first and last columns in a row.

React components are designed to be self-contained, which means by default they don't know what their position is within the DOM. This makes it tricky to determine the position of a column within a row.

Until this is figured out, the first and last columns in a row have to be manually marked.

```js
<Row>
  <Column first={true}>First column</Column>
  <Column>Second column</Column>
  <Column last={true}>Third column</Column>
</Row>
```

## Nested Rows

Similarly to [first and last columns](#first-and-last-columns) above, columns that contain a nested row must be manually marked.

```js
<Row>
  <Column first={true} last={true} hasRow={true}>
    <Row></Row>
  </Column>
</Row>
```

## Responsive Spacers

In Inky, the attribute `sizeSm` or `sizeLg` can be set on a `<spacer>` to set the size *and* make it responsive. If both attributes are set, the element prints out two spacers adjacent to each other.

A React component must return *one* root element, so making it return two spacers side-by-side is not possible. With that in mind, to create a spacer with different sizes on different screen widths, place two `<Spacer />` components right next to each other.

```js
<Spacer sizeSm="10" />
<Spacer sizeLg="20" />
```
