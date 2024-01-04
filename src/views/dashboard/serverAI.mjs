import OpenAI from 'openai';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;  

app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: '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',
});

async function getChatGptResponse(userInput) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: userInput }],
    });

    console.log(response.choices[0].message.content);
    return response.choices[0].message.content;
  } catch (err) {
    console.log('Error: ' + err);
    return err;
  }
}

app.post('/chat', async (req, res) => {
  try {
      const userInput = req.body.input;
      const chatResponse = await getChatGptResponse(userInput);
      res.json({ choices: [{ text: chatResponse }] });
  } catch (error) {
      console.error('Error in ChatGPT request:', error);
      res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
