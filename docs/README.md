# react-inky

react-inky is a port of [Inky](https://github.com/zurb/inky), a templating language for writing HTML emails with [Foundation for Emails](http;//foundation.zurb.com/emails). Writing a structurally sound HTML email requires a lot of HTML will a complex and specific table structure. Inky wraps up that structure into a set of simple HTML tags like `<row>`, `<column>`, and `<button>`, and converts them to the required tables. react-inky is a port of those custom components to React. With React's server-side rendering, you can produce email templates as React components with dynamic props.

To get started, [install the library](setup.md), and then take a look at some [example templates](examples.md).

## Versioning

react-inky is compatible with:
- Inky version 1.3.6
- Foundation for Emails version 2.2

## Support

If you run into an issue with react-inky, [open an issue on GitHub](https://github.com/gakimball/react-inky/issues). It's possible your issue is with inky's implementation and not react-inky's, but to be on the safe side, open an issue on react-inky's repository first.
