import React from "react";
import "./message.css";

function Message(props) {

    let cls='message-row';
    let thumbnail=null;

    if(props.isMyMessage){
        cls += ' you-message';
    }else{
        cls += ' other-message';
        thumbnail=<img src={props.message.imgUrl} alt={props.message.imgAlt}/>
    }

  return (
    <div className={cls}>
      <div className="message-content">
        {thumbnail}
        <div className="message-text">{props.message.messageText}</div>
        <div className="message-time">{props.message.createdAt}</div>
      </div>
    </div>
  );
}

export default Message;

  /* <img src={dany} alt="Daryl Duckmanton" />
<div className="message-text">
    Yeah I think it's best we do that. Otherwise things won't work well at all. 
    I'm adding more text here to test the sizing of the speech bubble and the 
    wrapping of it too.
</div> 
<div className="message-time">Apr 16</div>*/

