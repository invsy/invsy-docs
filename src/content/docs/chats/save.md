---
title: Save a chat
description: A guide in my new Starlight docs site.
---

The `save` function allows you to save messages to a chat. You can optionally provide metadata for the chat.

Note that this function overwrites the chat's messages and meta with the provided object.

```javascript
await invsy.save({
    id: chat.id,
    messages: [{
        role: 'user',
        content: 'Hello, I love cats'
    }],
    meta: {
        title: 'My first chat',
        additional_info: 'This is a chat about cats'
    }
})
```

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework
