import React, { useRef } from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../store.js';
function MessageList(props) {
  const scrollDown = useRef(null);
  const scroll = () => {
    scrollDown.current.scrollIntoView();
  };
  return (
    <div onChange={scroll} className="chat-messages-scroll">
      <div className="chat-messages">
        {state.messages.map((message) => {
          return (
            <div
              key={message.messageId}
              onAnimationStart={scroll}
              className={
                message.id === state.id
                  ? 'chat-message'
                  : 'chat-message chat-message_recipient'
              }
            >
              <div>
                <div
                  onClick={() => {
                    if (message.id !== state.id) {
                      state.messageState.message = `${message.username}, `;
                    }
                  }}
                  className="chat-message__username"
                >
                  {message.username}
                </div>
                <div className="chat-message__text">{message.message}</div>
              </div>
              <div className="chat-message__avatar" />
            </div>
          );
        })}
        <div ref={scrollDown} />
      </div>
    </div>
  );
}
export default view(MessageList);
