# Polyfill Quickstart

To make the `document.passes.request` ABI available to all users in any browser, you can add the `@passes/polyfill` script to your page via a module script tag.

```html
<script src="https://unpkg.com/@passes/polyfill@^0.0.5-alpha"></script>
```

## The Polyfill Flow

<img src="/diagram_02_light.gif" alt="Diagram of a Pass Request" class="light-mode-only" />
<img src="/diagram_02_dark.gif" alt="Diagram of a Pass Request" class="dark-mode-only" />

The polyfill provides an implementation of the document.passes.request ABI using a POST request to passes.org in a new window which forwards the end user to their pass engine to handle the request.
