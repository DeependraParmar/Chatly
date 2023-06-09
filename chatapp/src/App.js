import React from 'react';
// import socketIO from "socket.io-client";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Join from './components/Join/Join';
import './App.css';
import Chat from './components/chat/Chat';
import {Toaster} from "react-hot-toast";

// const ENDPOINT = "http://localhost:4000";
// const socket = socketIO(ENDPOINT, { transports: ["websocket"] });
function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={Join} />
          <Route exact path="/chat" Component={Chat} />
        </Routes>
        <Toaster />
      </Router>
    
    </>
  );
}

export default App;
