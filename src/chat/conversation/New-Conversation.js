import { Avatar } from "@material-ui/core";
import React from "react";

import "./New-Conversation.css";

function NewConversation() {
  return (
    <div id="new-message-container">
      <Avatar className={'avt'} style={{width:'30px',height:'30px' ,color: "black", fontSize: "24px", fontWeight: "bold" }}>
        +
      </Avatar>
    </div>
  );
}

export default NewConversation;
