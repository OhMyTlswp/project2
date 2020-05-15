import { store } from '@risingstack/react-easy-state';
const state = store({
  messages: [
    // {
    //   classMessage: 'chat-message chat-message_recipient',
    //   message: 'Ты скоро?',
    // },
    // {
    //   classMessage: 'chat-message chat-message_recipient',
    //   message: 'А?',
    // },
    // {
    //   classMessage: 'chat-message',
    //   message: 'Скоро',
    // },
    // {
    //   classMessage: 'chat-message chat-message_recipient',
    //   message: 'Быстрее!!!',
    // },
    // {
    //   classMessage: 'chat-message',
    //   message: 'Ок',
    // },
  ],
  id: 0,
  messageState: {
    message: '',
    username: '',
    usernameEntered: false,
  },
});
export default state;
