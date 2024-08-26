const messages = [
    {
      role: 'user',
      content: 'Hello!'
    }, {
        role: 'assistant',
        content: 'Hello, welcome to Invsy!'
    }
  ]
  // Update meta title, use the first message as the chat title
  const title = chat.messages[0].content.substring(0, 100);

  const chat = await invsy.save({
    // Optional chat meta
    meta: {
      title
    },
    messages
  });