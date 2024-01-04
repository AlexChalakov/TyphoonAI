import React, { useState } from 'react';
import axios from 'axios';
import { CButton } from '@coreui/react';

function AIassistant() {
    const [input, setInput] = useState('');
    const [responses, setResponses] = useState([]);

    const sendQuery = async () => {
        try {
            const response = await axios.post('http://localhost:3000/chat', { input });
            setResponses([...responses, response.data]);
            setInput('');
        } catch (error) {
            console.error('Error sending query:', error);
        }
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
                        value={input}
                        onChange={(e) => setInput(e.target.value)}>
                    </textarea>
                    <div className='mb-6'>
                        <CButton 
                            color='primary'
                            onClick={sendQuery}>
                            Send
                        </CButton>
                    </div>
                    <div className='mt-4 p-4 border rounded bg-black shadow-lg'>
                        {responses.map((resp, index) => (
                            <p key={index}>{resp.choices[0].text}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIassistant
