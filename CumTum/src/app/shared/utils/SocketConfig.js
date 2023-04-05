import io from 'socket.io-client';
import {constants} from '../constants';

const socket = io(constants.SOCKET.URL, {
  transports: ['websocket'],
});

export default socket;
