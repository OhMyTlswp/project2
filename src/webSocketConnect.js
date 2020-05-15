import state from './store.js';
import io from 'socket.io-client';
const socket = io('http://localhost:3000');
socket.on('connect', (data) => {
  socket.emit('get_id', (data) => {
    state.id = data;
  });
});
socket.on('add_mess', (data) => {
  state.messages.push(data);
});
export default socket;
