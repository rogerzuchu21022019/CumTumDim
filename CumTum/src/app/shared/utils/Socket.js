import io from 'socket.io-client';
import { constants } from '../constants';
import { LOG } from '../../../../logger.config';
const log = LOG.extend(`SOCKET.JS`)

class WSService {

    initializeSocket = async () => {
        try {

            this.socket = io(constants.SOCKET.URL, {
                transports: ['websocket']
            })
            log.error("initializing socket", this.socket)

            this.socket.on('connect', (data) => {
                console.log("=== socket connected ====")
            })

            this.socket.on('disconnect', (data) => {
                console.log("=== socket disconnected ====")
            })

            this.socket.on('error', (data) => {
                console.log("socekt error", data)
            })

        } catch (error) {
            console.log("scoket is not inialized", error)
        }
    }

    emit(event, data = {}) {
        this.socket.emit(event, data)
    }
    
    on(event, cb) {
        this.socket.on(event, cb)
    }

    removeListener(listenerName) {
        this.socket.removeListener(listenerName)
    }

}

const socketServices = new WSService()

export default socketServices