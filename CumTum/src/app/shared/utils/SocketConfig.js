//SocketConfig.js
import io from 'socket.io-client';
import {constants} from '../constants';

const socket = io(constants.SOCKET.URL, {
  transports: ['websocket'],
});
console.log('connect', socket);

export default socket;
