# Polyfill Quickstart

Add the polyfill script to your page. This will make the `document.passes` ABI available to all users, even if their environment lacks native support for Passes.

```html
<script type="module" src="https://unpkg.com/@passes/polyfill@0.0.1-alpha.16/src/main.js"></script>
```

Provides a polyfill implementation of the document.passes.request ABI using a POST request to passes.org in a new window which forwards the end user to their pass engine to handle the request.

::: warning Writing In Progress
This section raises questions about how pass requests are sent to pass providers.
:::