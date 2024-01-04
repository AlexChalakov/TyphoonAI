import React, { useState } from 'react'
import axios from 'axios'
import { CButton } from '@coreui/react';

const AIassistant = () => {
    const [userInput, setUserInput] = useState('');
    const [conversation, setConversation] = useState([]);

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const sendMessage = async () => {
        const payload = {
            model: "text-davinci-003", // or your specific model
            prompt: userInput,
            temperature: 0.7,
        };

        const response = await axios.post("https://api.openai.com/v1/completions", payload, {
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        setConversation([...conversation, { user: userInput, bot: response.data.choices[0].text }]);
        setUserInput('');
    };

    return (
        <div className='p-8 bg-gray-200 min-h-screen'>
            <div className='max-w-lg mx-auto'>
                <div className='mb-6'>
                    <label className='block text-gray-700 text-lg font-bold mb-2'>User Input:</label>
                    <div className='mb-6'></div>
                    <textarea
                        className='shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        rows={4}
                        placeholder='Type your message here...'
                        value={userInput}
                        onChange={handleInputChange}>
                    </textarea>
                    <div className='mb-6'>
                        <CButton 
                            color='primary'
                            onClick={sendMessage}>
                            Send
                        </CButton>
                    </div>
                    <div className='mt-4 p-4 border rounded bg-black shadow-lg'>
                        {conversation.map((msg, index) => (
                            <p key={index} className={`mb-2 ${msg.user ? 'text-blue-600' : 'text-green-600'}`}>
                                <b>{msg.user ? 'You: ' : 'Bot: '}</b> {msg.user || msg.bot}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIassistant
