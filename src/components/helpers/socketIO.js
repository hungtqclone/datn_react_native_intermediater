import io from "socket.io-client";
import { urlAPI } from "./urlAPI";
const socket = io(urlAPI)
let connected = false

export const handleUserId = async (userId) => {
    if (connected == false) {
        socket.on('connect', () => {
            console.log('connected to server socket.io');
            socket.emit('set-socketId', userId);
            connected = true;
        });
    }

}

export default socket;