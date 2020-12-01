import React from 'react';
import trash from "../../images/icons/trash-logo.svg";

import './ChatTitle.css';

const ChatTitle = ({ selectedConversation , onDeleteConversation }) => {
    return (
        
        <div id="chat-title">
      <span>{selectedConversation.title}</span>
      <div
        style={{
          width: "32px",
          borderRadius: "50%",
          cursor:'pointer',
          background: "white",
          display: "flex",
          padding: "2px 2px ",
          alignItems: "center",
        }} 
        onClick = {() => {onDeleteConversation();}}
      >
        <img style={{ width: "100%" }} src={trash} alt="Delete Conversation" />
      </div>
    </div>
    );
}

export default ChatTitle;