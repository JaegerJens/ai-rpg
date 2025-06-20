import ollama, { Message } from 'ollama';
import { Character, dammon, generalPrompt, karlach, MessageLogEntry, scenario } from './prompts.ts';

const targetModel = 'qwen3'; // thinking model

const textEncoder = new TextEncoder();

const prompt = (history: string): Message => ({
  role: 'user',
  content: `${history} ${scenario} ${generalPrompt}`,
});

const log: MessageLogEntry[] = [];

const chatHistory = (character: Character): string =>
  log.map(l => l.character === character.name ?
    `${l.thinking} ${l.public}` :
    `${l.character} says: ${l.public}`)
    .join('\n');

const print = (entry: MessageLogEntry) => {
  Deno.stdout.write(textEncoder.encode(`###########
## ${entry.character}:
${entry.thinking}
--
${entry.public}\n`));
}

const action = async (character: Character) => {
  const response = await ollama.chat({
    model: targetModel,
    messages: [prompt(chatHistory(character))],
    think: true,
  });

  const entry: MessageLogEntry = {
    character: character.name,
    thinking: response.message.thinking,
    public: response.message.content,
  };
  log.push(entry);
  print(entry);
}

await action(karlach);
await action(dammon);
