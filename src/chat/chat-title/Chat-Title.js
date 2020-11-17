import React from "react";
import trash from "../../images/icons/trash-logo.svg";

import "./Chat-Title.css";

function ChatTitle() {
  return (
    <div id="chat-title">
      <span>Daryl Duckmanton</span>
      <div
        style={{
          width: "32px",
          borderRadius: "50%",
          background: "white",
          display:'flex',
          padding: "2px 2px ",
          alignItems:'center',
          
        }}
      >
        <img src={trash} alt="Delete Conversation" />
      </div>
    </div>
  );
}

export default ChatTitle;
