# Request Handlers

:::warning Draft
This page only scratches the surface of Request Handlers. We'll be continuously publishing updates to it.

If you have unanswered questions, please reach out via our [discussions site](https://github.com/passes-org/passes/discussions).
:::

When an app sends a Pass Request, it has to be presented to the user for them to approve.

This is the job of Request Handlers.

## Pass Providers

All Pass Requests are sent directly to the user's Pass Provider.

Naturally, the Pass Provider can present the Pass Request to the user if it supports the topic.

However, if _every_ Pass Request topic needed to be supported by every user's Pass Provider for them to use Passes effectively, that would be very limiting.

The role of Pass Providers is thus to provide the user's identity (their keypairs and associated data like profile info), perform signatures on their behalf, and support common topics like requests for signatures or profile info.

Pass Providers are free to support any topics they'd like. For everything else, there's Topic Providers.

## Topic Providers

Topic Providers are user-facing apps that implement support for Pass Request topics related to their app domain.

Any app can be a Topic Provider.

For example, an app that host git repos can implement support for Pass Request topics related to accessing a user's git repos.

### Building a Topic Provider

When the user signs into the Topic Provider, it can declare the topics it supports to their Pass Provider via an `org.passes.provide-topics` request, containing a list of the topics it supports.

```typescript
import { TopicProviders } from '@passes/reqs';

await TopicProviders.provideTopics.sendRequest([
  'com.git-scm.remote-urls', // This app supports requests for Git repo URLs
]);
```

Future Pass Requests with the topic `com.git-scm.remote-urls` can now be forwarded to your app by the user's Pass Provider.

If many apps the user uses support the topic, their Pass Provider can show them a list of choices including your app.