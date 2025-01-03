import { promises as fs } from 'fs';

export class MessagesRepository {
  async findOne(id: string): Promise<string | undefined> {
    try {
      const contents = await fs.readFile('messages.json', 'utf-8'); // Use 'utf-8' corretamente
      const messages = JSON.parse(contents);
      return messages[id];
    } catch (error) {
      console.error('Error finding the message:', error);
      return undefined; // Retorna undefined caso haja erro
    }
  }

  async findAll() {
    try {
      const contents = await fs.readFile('messages.json', 'utf-8');
      const messages = JSON.parse(contents);
      return messages;
    } catch (error) {
      console.error('Error reading all messages:', error);
      return {};
    }
  }

  async create(content: string) {
    try {
      const contents = await fs.readFile('messages.json', 'utf-8');
      const messages = JSON.parse(contents);

      const id = Math.floor(Math.random() * 999);
      messages[id] = { id, content };

      await fs.writeFile('messages.json', JSON.stringify(messages));
    } catch (error) {
      console.error('Error creating a message:', error);
    }
  }
}
