import React, {useState, useEffect} from 'react';
import Chat from './Chat';
import Login from './Login';
import './../styles/App.css';

function ChatBlock({setUsername, setRoom, joinRoom, socket, username, 
  room, showChat, setShowChat}) {

  const [isOpen, setIsOpen] = useState(false);
  const [chatBtnClass, setChatBtnClass] = useState("neo-icon-agents");

   useEffect(() => {
    setChatBtnClass(!isOpen ? "neo-icon-agents" : "open-chat-btn") 
  }, [isOpen])
 
  const toggleOpen = () => setIsOpen(!isOpen);

  const chatStyle = {
    height: isOpen ? "300px" : "60px",
    width: isOpen ? "300px" : "60px",
    opacity: isOpen ? "1" : "0.7",
    'border-radius': isOpen ? "0" : "50%",
    display: isOpen ? "revert" : "flex",
    'align-items': isOpen ? "unset" : "center",
  }

  return (
    <div className="chat-window-container" 
        style={chatStyle}>
      <div className="open-chat-div">
        <button type="text" className={chatBtnClass} onClick={toggleOpen} >
        {!isOpen ? '' : "Fold down"}  
        <span className="open-chat-icon">{!isOpen ?  '' : "▼"}</span> 
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
