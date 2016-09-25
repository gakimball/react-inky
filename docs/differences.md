# Differences from Inky

react-inky references the test suite for the Node version of Inky directly, and the custom tags and attributes are all the same. However, due to some differences in how React works with HTML, there are a few behavioral differences between Inky and react-inky.

## Configuration

Inky's main configuration option is `columnCount`, which can be used to change the global column count from the default of 12. Instead of passing that setting to a function, it's set on the top-level `<Container />` component. In the below example, all columns inside of the container will default to 16 columns wide.

```js
<Container columnCount={16}>
  {/* ... */}
</Container>
```

## Responsive Spacers

In Inky, the attribute `sizeSm` or `sizeLg` can be set on a `<spacer>` to set the size *and* make it responsive. If both attributes are set, the element prints out two spacers adjacent to each other.

A React component must return *one* root element, so making it return two spacers side-by-side is not possible. With that in mind, to create a spacer with different sizes on different screen widths, place two `<Spacer />` components right next to each other.

```js
<Spacer sizeSm="10" />
<Spacer sizeLg="20" />
```

## is="true"

You'll see the attribute `is="true"` on the root elements of many components. Adding the `is` attribute to an element bypasses React's checks for what attributes are valid on an element. Many Foundation for Emails components use `align`, and other deprecated HTML attributes. Normally, React will throw a warning and strip these attributes when you try to add them. Adding `is` to an element tells React to skip attribute checking.

The presence of `is="true"` won't affect how email clients render the HTML, but it does make the HTML output slightly different from Inky.

## data-parsed

Inky adds the attribute `data-parsed` to `<center>` tags, but react-inky does not. This behavior exists in Inky because the `<center>` tag is a custom Inky component, but it's *also* a plain HTML element. When it sees a `<center>` tag, it converts it to a `<center>` tag with custom behavior. However, because the tag name doesn't change, older versions of Inky would get caught in an infinite loop, where the parser processes `<center>` as a custom component over and over again. The `data-parsed` was added to signal Inky to skip over it subsequent times.

react-inky doesn't have this issue because `<Center />` is a React component, and can't be confused with a generic `<center>` tag. The `data-parsed` attribute has no functionality in Foundation for Emails.
