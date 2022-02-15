import React, {useState} from 'react';
import Chat from './Chat';
import Login from './Login';
import './../styles/App.css';

function ChatBlock({setUsername, setRoom, joinRoom, socket, username, userEmail,
  room, showChat, setShowChat}) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const chatStyle = {
    height: isOpen ? "350px" : "0",
    width: isOpen ? "300px" : "0",
    opacity: isOpen ? "1" : "0.7",
    boxShadow: isOpen ? "0 0 0px 1px var(--mblue), 0 0 0px 3px rgba(240, 241, 243, 0.8)" : "none"
  }

  return (
    <>
    {!isOpen && 
      <i className="neo-icon-agents" onClick={toggleOpen}></i>
    }     

    <div className="chat-window-container" style={chatStyle}>
      <div className="open-chat-div" onClick={toggleOpen}>
          {isOpen && 
          <button type="text" className="open-chat-btn"  >
            {!isOpen ? '' : "Fold down"}  
            <span className="open-chat-icon">{!isOpen ?  '' : "▼"}</span> 
          </button>     
          }
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
        userEmail={userEmail}
        room={room} 
        setRoom={setRoom}
        setUsername={setUsername}
        setShowChat={setShowChat}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        /> }
  </div>
  </>
  )
}

export default ChatBlock;
