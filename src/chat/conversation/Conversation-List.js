import React from "react";
import ConversationItem from "./conversation-item";
//image imports

import "./Conversation-List.css";

const ConversationList = (props) => {
  const selectedConversationIndex = 0;
  //maps eavh chatting person on to the conversation list
  const conversationItems = props.conversations.map((conversation, index) => {
    return <ConversationItem 
        key={index} 
        isActive = {selectedConversationIndex===index} 
        conversation={conversation} 
    />;
  });
  return <div id="conversation-list">{conversationItems}</div>;
};

export default ConversationList;
