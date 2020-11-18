import React from "react";
import Message from "./message";
import "./Message-List.css";

function MessageList(props) {
  const messageItems = props.messages.map((message, index) => {
    return (
      <Message
        key={index}
        isMyMessage={message.isMyMessage}
        message={message}
      />
    );
  });
  return <div id="chat-message-list">{messageItems}</div>;
}

export default MessageList;
