// import React from "react";
// import "./conversation-item.css";

// const ConversationItem = (props) => {

//   let cls = 'conversation';

//   if(props.isActive){
//     cls+= ' active'
//   }

//   return (
//     <div className={cls}>
//       <img src={props.conversation.imageUrl} alt={props.conversation.imageAlt} />
//       <div className="title-text">{props.conversation.title}</div>
//       <div className="created-date">{props.conversation.createdAt}</div>
//       <div className="conversation-message">{props.conversation.latestMessage}</div>
//     </div>
//   );
// };

// export default ConversationItem;

import React from "react";
// import classNames from "classnames";

import "./conversation-item.css";

const classNames = '';

const ConversationItem = ({
  conversation,
  isActive,
  onConversationItemSelected,
}) => {
  const className = classNames("conversation", {
    active: isActive,
  });

  return (
    <div
      className={className}
      onClick={() => onConversationItemSelected(conversation.id)}
    >
      <img src={conversation.imageUrl} alt={conversation.imageAlt} />
      <div className="title-text">{conversation.title}</div>
      <div className="created-date">{conversation.createdAt}</div>
      <div className="conversation-message">
        {conversation.latestMessageText}
      </div>
    </div>
  );
};

export default ConversationItem;
