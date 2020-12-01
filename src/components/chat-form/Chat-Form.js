import React, { useState } from 'react';
import att from '../../images/icons/attachment-logo.svg'

import './Chat-Form.css';

function ChatForm({ onMessageSubmitted }) {

    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onMessageSubmitted(message);
        setMessage('');
    }

    return (
        <form id="chat-form" onSubmit={handleSubmit}>
            <img src={att} alt="Add Attachment" />
            <input
                type="text"
                placeholder="type a message"
                value={message}
                onChange={handleChange}
            />
            <button type='submit'>Send</button>
        </form>
    );
}

export default ChatForm;