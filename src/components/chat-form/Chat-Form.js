import React, { useState } from 'react';
import att from '../../images/icons/attachment-logo.svg'
import FormButton from '../controls/FormButton';

import './Chat-Form.css';


// const [message, setMessage] = useState('')

// const handleChange = (e) => {
//     setMessage(e.target.value);
// }

// const handleSubmit = (e) => {
//     e.preventDefault()
//     onMessageSubmitted(message);
//     setMessage('');
// }

const isMessageEmpty = (textMessage) => {
    return adjustTextMessage(textMessage).length === 0;
}

const adjustTextMessage = (textMessage) => {
    return textMessage.trim();
};

const ChatForm = ({ onMessageSubmitted, selectedConversation }) => {
    const [textMessage, setTextMessage] = useState('');
    const disableButton = isMessageEmpty(textMessage);
    let formContents = null;
    let handleFormSubmit = null;

    if (selectedConversation) {
        formContents = (
            <>
                <div title="Add Attachment">
                    <img src={att} alt="Add Attachment" />
                </div>
                <input
                    type="text"
                    placeholder="type a message"
                    value={textMessage}
                    onChange={(e) => { setTextMessage(e.target.value); }}
                />

                <FormButton disabled={disableButton}>Send</FormButton>
            </>
        );

        handleFormSubmit = (e) => {
            e.preventDefault();

            if (!isMessageEmpty(textMessage)) {
                onMessageSubmitted(textMessage);
                setTextMessage('');
            }
        };
    }

    return (
        <form id="chat-form" onSubmit={handleFormSubmit}>
            {/* <img src={att} alt="Add Attachment" /> */}
            {formContents}
            {/* <button type='submit'>Send</button> */}
        </form>
    );
}

export default ChatForm;