import React from "react";
import ConversationtSearch from "../conversation/conversation-search";
import ConversationList from "../conversation/Conversation-List";
import NewConversation from "../conversation/New-Conversation";
import ChatTitle from "../chat-title/Chat-Title";
import MessageList from "../message/Message-List";
import ChatForm from "../chat-form/Chat-Form";
import "./Chat-Shell.css";
import { conversations, selectedConversation } from "../data/conversation";
import { Messages } from "../data/messages";

const ChatShell = () => {
  
  return (
    <div id="chat-container">
      <ConversationtSearch />
      <ConversationList conversations={conversations} />
      <NewConversation />
      <ChatTitle selectedConversation={selectedConversation} />
      <MessageList messages={Messages} />
      <ChatForm />
    </div>
  );
}

export default ChatShell;
