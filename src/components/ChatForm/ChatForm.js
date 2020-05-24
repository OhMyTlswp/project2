import React from 'react';
import { view } from '@risingstack/react-easy-state';
import socket from '../../webSocketConnect';
import state from '../../store.js';
import './chatForm.css';

function ChatForm() {
  function setName() {
    state.messageState.username = event.target.value;
  }
  function writeMessage() {
    state.messageState.message = event.target.value;
  }
  function submitMessage() {
    if (
      !/^\s+$/.test(state.messageState.message) &&
      state.messageState.message !== ''
    ) {
      if (
        !/^\s+$/.test(state.messageState.username) &&
        state.messageState.username !== ''
      ) {
        socket.emit('set_name', state.messageState.username);
        state.messageState.usernameEntered = true;
      }
      socket.emit('new_message', state.messageState.message, (data) => {
        console.log(data);
      });
      state.messageState.message = '';
    }
  }
  return (
    <form className="message-form">
      <input
        type="text"
        value={state.messageState.username}
        onChange={setName}
        placeholder="Введите имя"
        className="message-form__name"
        disabled={state.messageState.usernameEntered}
      />
      <input
        value={state.messageState.message}
        onChange={writeMessage}
        type="text"
        placeholder="Введите сообщение"
        className="message-form__text"
      />
      <button onClick={submitMessage} className="message-form__button">
        Отправить
      </button>
    </form>
  );
}
export default view(ChatForm);
window.onsubmit = function () {
  return false;
};
