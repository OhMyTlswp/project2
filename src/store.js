import { store } from '@risingstack/react-easy-state';

const state = store({
  messages: [],
  id: 0,
  messageState: {
    message: '',
    username: '',
    usernameEntered: false,
  },
});
export default state;
