# What are Pass Requests?

::: warning In Progress
This content is just a sketch.
:::

Some effects of this model:
1. Reduced complexity because there are only 3 entities involved in the protocol: Passes, Pass Providers, and Pass Requests.
  - Passes replace the need for a Google Account (or other identity proxy)
  - Pass Providers replace the hosting and token creation/authorization that is handled in OAuth by authorization servers, resource servers, authorization grants, and access tokens
  - Pass Requests replace the UI presented by an authorization server, and can be formatted to request any kind of data associated with a Pass
2. Independent identity that isn’t reliant on an external account (ie. Google). In fact, people are free to use many Pass Providers and/or multiple Passes that are focused on different aspects of their lives
3. Sign in anywhere where Pass Requests are used

### Pass Requests are arbitrary requests made by apps directly to users on the client side.
- There are different request types for different use cases.
- Anyone can create a Pass Request type. You need:
  - A specification that describes how to format and interpret the request and response
  - Apps to adopt the pass request type
  - Pass providers to provide support for the Pass Request type
- The Passes protocol provides a very simple interface – a single ABI for making a Pass Request and awaiting a result
  - It’s bytes-in / bytes-out
  - Backwards and forwards compatible
  - Easy to support on a variety of platforms
  - Capable of representing anything that can be encoded into bytes (text, files, etc)
- When an app sends a Pass Request, the client delegates it to the user’s pass provider, which– if it supports the pass request type –renders a UI for the user to review and approve or reject the request
- When the user approves or rejects the request, the pass provider sends the result back to the requesting app via the client
- As an app developer, you don’t need to deal with bytes directly. Pass request types have high-level APIs for creating and parsing them
