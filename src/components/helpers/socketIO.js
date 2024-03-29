import io from "socket.io-client";
import { urlAPI } from "./urlAPI";
const socket = io(urlAPI)

export const handleUserId = async (userId) => {
    socket.emit('set-socketId', userId);

}

export default socket;