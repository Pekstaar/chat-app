import React from 'react';
import att from '../../images/icons/attachment-logo.svg'

import './Chat-Form.css';

function ChatForm() {
    return (
        <div id="chat-form">
            <img src={att} alt="Add Attachment" />
            <input type="text" placeholder="type a message" />
        </div>
    );
}

export default ChatForm;