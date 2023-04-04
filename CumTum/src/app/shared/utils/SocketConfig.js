import io from 'socket.io-client';
import {constants} from '../constants';

const socket = io(constants.SOCKET_URL.LOCAL, {
  transports: ['websocket'],
});

export default socket;
