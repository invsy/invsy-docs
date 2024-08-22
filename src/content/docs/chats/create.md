---
title: Create a chat
description: A guide in my new Starlight docs site.
---

The `create` function allows you to create a new chat for the current user. You can optionally provide metadata for the chat.

```javascript
const chat = await invsy.create({
    title: 'My first chat',
    additional_info: 'This is a chat about cats'
})
```

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework
