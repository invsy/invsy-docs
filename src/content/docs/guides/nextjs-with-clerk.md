---
title: Example Guide
description: A guide in my new Starlight docs site.
---

```ts title="Example using Next.js .env and Clerk"
import { auth } from '@clerk/nextjs/server'
import { Invsy } from 'invsy'

const { userId } = auth()

export const invsy = new Invsy(
    process.env.INVSY_API_KEY,
    process.env.INVSY_PROJECT_ID,
    userId
);
```
