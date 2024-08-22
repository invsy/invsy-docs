---
title: Invsy client
description: This guide will instruct you through setting up Invsy in your project.
---

The Invsy client is a JavaScript library that allows you to interact with the Invsy API. This guide will instruct you through setting up Invsy in your project.

```ts
import { Invsy } from 'invsy'

export const invsy = new Invsy(
  'INVSY_API_KEY',
  'INVSY_PROJECT_ID',
  'USER_ID'
);
```

### Parameters
- `token`: The API token for authentication. This is required to authenticate your requests to the Invsy API.
- `projectId`: The project ID associated with your Invsy account. This identifies the specific project you are working on.
- `userId`: The user ID of the user making the request. This is used to track and manage user-specific data and actions.

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework
