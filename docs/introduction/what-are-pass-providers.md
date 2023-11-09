# What are Pass Providers?
A Pass Provider is an app (or a feature of an app) that interprets, presents, and handles pass requests on behalf of the user.

Any developer can create a Pass Provider.

Conventionally, a Pass Provider is a web or native app, but it's possible one could also be built into a user's browser or operating system.

## Pass Providers on the Web
To be compatible with the Passes.org polyfill and upcoming Passes web extension, a Pass Provider must be a web application that accepts multi-part POST requests with a `File` attachment called `request` containing a `Blob` representing the request's raw bytes. 

::: warning Incomplete Page
This inevitably raises important questions it doesn't answer.
:::