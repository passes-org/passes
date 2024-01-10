# Request Handlers

:::warning Draft
This page only scratches the surface of Request Handlers. We'll be continuously publishing updates to it.

If you have unanswered questions, please reach out via our [discussions site](https://github.com/passes-org/passes/discussions).
:::

Request Handlers present Pass Requests to the user. Currently, there are two kinds: Pass Providers and Topic Providers.

A Pass Provider can present a Pass Request to the user if it supports the topic. If not, a Topic Provider will handle the request.

## Pass Providers

All Pass Requests are sent first to the user's chosen Pass Provider.

If the Pass Provider supports the topic, it will present the Pass Request to the user.

However, if _every_ Pass Request topic needed to be supported by every user's Pass Provider for them to use Passes effectively, that would be very limiting.

The role of Pass Providers is thus to provide the user's identity (their keypairs and associated data like profile info), perform signatures on their behalf, and support common topics like requests for signatures or profile info.

Pass Providers are free to support any topics they'd like. For everything else, there's Topic Providers.

## Topic Providers

If Pass Providers need to support every possible Pass Request topic, it would become a burden for Pass Providers to handle the long-tail of Pass Request topics and limit the incentive for developers to make new, creative types of Pass Requests.

Topic Providers solve this problem by supporting Pass Request topics related to their app's domain. Any app can be a Topic Provider, and they are simple to build alongside the new type of Pass Request being introduced.

The incentive to build a Topic Provider is that anyone who wants to leverage the respective Pass Request, can use that Topic Provider. This introduces a network of Topic Providers that any developer can then leverage."

Topic Providers are user-facing apps that implement support for Pass Request topics related to their app domain.

Any app can be a Topic Provider.

For example, an app that host git repos can implement support for Pass Request topics related to accessing a user's git repos.

### Building a Topic Provider

When the user signs into the Topic Provider, it can announce the topics it supports to their Pass Provider via an `org.passes.provide-topics` request, containing a list of the topics it supports.

```typescript
import { TopicProviders } from '@passes/reqs';

// Announce that this app supports requests for Git repo URLs
await TopicProviders.provideTopics.sendRequest({
  uri: 'https://my-app.com/handle-pass-request',
  topics: ['com.git-scm.remote-urls'],
});
```

Future Pass Requests with the topic `com.git-scm.remote-urls` can now be forwarded to your app by the user's Pass Provider.

If many apps the user uses support the topic, their Pass Provider can show them a list of choices including your app.
