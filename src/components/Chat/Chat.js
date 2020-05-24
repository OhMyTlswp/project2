import React from 'react';
import { view } from '@risingstack/react-easy-state';
import MessageList from '../MessageList/MessageList.js';
import ChatForm from '../ChatForm/ChatForm.js';
import './chat.css';

function Chat() {
  return (
    <div className="chat">
      <MessageList />
      <ChatForm />
    </div>
  );
}
export default view(Chat);
