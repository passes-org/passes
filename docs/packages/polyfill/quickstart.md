# Polyfill Quickstart

To make the `document.passes.request` ABI available to all users in any browser, you can add the `@passes/polyfill` script to your page via a script tag.

```html
<script src="https://unpkg.com/@passes/polyfill@^0.0.12-alpha"></script>
```

## The Polyfill Flow

<img src="/diagram_02_light.gif" alt="Diagram of a Pass Request" class="light-mode-only" />
<img src="/diagram_02_dark.gif" alt="Diagram of a Pass Request" class="dark-mode-only" />

The polyfill provides an implementation of the document.passes.request ABI that opens `https://passes.org/request` in a new window, which forwards the end user to their Pass Provider to handle the request.

The user's Pass Provider then sends a message (via `window.postMessage`) of type `{ type: 'org.passes.messaging.connect' }`, which the Polyfill in the requesting app awaits to send the Pass Request to the user's Pass Provider.

Then, the Polyfill in the Requesting App sends the Pass Request back to the user's Pass Provider over the client by posting a message of type `{ type: 'org.passes.messaging.request'; request: Uint8Array }` to it.

Next, the user's Pass Provider interprets and presents the Pass Request to the user for review.

Finally, the user's Pass Provider posts a message of type `{ type: 'org.passes.messaging.result'; result: Uint8Array }` back to the Requesting App.
