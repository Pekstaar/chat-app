import React from 'react';
import trash from "../../images/icons/trash-logo.svg";

import './ChatTitle.css';

const ChatTitle = ({ selectedConversation }) => {
    return (
        
        <div id="chat-title">
      <span>{selectedConversation.title}</span>
      <div
        style={{
          width: "32px",
          borderRadius: "50%",
          background: "white",
          display: "flex",
          padding: "2px 2px ",
          alignItems: "center",
        }} 
      >
        <img style={{ width: "100%" }} src={trash} alt="Delete Conversation" />
      </div>
    </div>
    );
}

export default ChatTitle;