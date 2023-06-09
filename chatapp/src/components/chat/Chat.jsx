import React, { useEffect } from 'react';
import "./chat.css";
import { username } from '../Join/Join';
import socketIO from 'socket.io-client';
import { toast } from 'react-hot-toast';

export default function Chat() {
    const ENDPOINT = "http://localhost:4000";
    const socket = socketIO(ENDPOINT, {transports: ['websocket']});
    useEffect(() => {
        socket.on("connect", () => {

        });
    }, [socket]);
    toast.success(`Welcome ${username}`);
  return (
    <div className='chatpage'>
        <div className="chatcontainer">
            <div className="header">
                <h1>{username}</h1>
            </div>
            <div className="body">

            </div>
            <div className="inputBox">

            </div>
        </div>
    </div>
  )
}
