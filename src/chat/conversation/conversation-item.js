import React from "react";
import "./conversation-item.css";

const ConversationItem = (props) => {

  let cls = 'conversation';

  if(props.isActive){
    cls+= ' active'
  }

  return (
    <div className={cls}>
      <img src={props.conversation.imageUrl} alt={props.conversation.imageAlt} />
      <div className="title-text">{props.conversation.title}</div>
      <div className="created-date">{props.conversation.createdAt}</div>
      <div className="conversation-message">{props.conversation.message}</div>
    </div>
  );
};
 
export default ConversationItem;

  /* <img src={dany} alt="Daryl Duckmanton" />
<div className="title-text">Daryl Duckmanton</div>
<div className="created-date">Apr 16</div>
<div className="conversation-message">This is a message</div> */

