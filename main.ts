import ollama, { Message } from 'ollama'

const targetModel = 'qwen2.5';

const userPrompt = prompt('>');

if (userPrompt == null) {
  console.log('Bye!');
  Deno.exit(0);
}

const message: Message = {
  role: 'user',
  content: userPrompt,
};

const response = await ollama.chat({
  model: targetModel,
  messages: [message],
});

const textEncoder = new TextEncoder();
Deno.stdout.write(textEncoder.encode(response.message.content));
