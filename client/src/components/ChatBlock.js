import React, {useState, useEffect} from 'react';
import Chat from './Chat';
import Login from './Login';
import './../styles/App.css';

function ChatBlock({setUsername, setRoom, joinRoom, socket, username, 
  room, showChat, setShowChat}) {

  const [isOpen, setIsOpen] = useState(false);

 
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="chat-window-container" 
        style={isOpen ? {height: "400px", opacity: 1 }
      : {height: "35px", opacity: 0.7}
    }>
      <div className="open-chat-div">
        <button type="text" className="open-chat-btn" onClick={toggleOpen} >
        {!isOpen ? 'Open Support Chat' : "Close Chat"}  
        <span className="open-chat-icon">{!isOpen ?  '▲' : "▼"}</span>
      </button>

      </div>
      
      {(!showChat && isOpen) &&
      <Login  
        setUsername={setUsername}
        setRoom={setRoom}
        joinRoom={joinRoom}
      /> }

      {(showChat && isOpen) &&
      <Chat
        socket={socket} 
        username={username} 
        room={room} 
        setRoom={setRoom}
        setUsername={setUsername}
        setShowChat={setShowChat}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        /> }
  </div>
  )
}

export default ChatBlock;
