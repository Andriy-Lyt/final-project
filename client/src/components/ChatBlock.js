import React, {useState} from 'react';
import Chat from './Chat';
import Login from './Login';
import './../styles/App.css';
import Buble from './Bubble';

function ChatBlock({username, setUsername, setRoom, joinRoom, socket, userEmail, setUserEmail, room, showChat, setShowChat}) {

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
      <i aria-label="open support chat icon" className="neo-icon-agents" onClick={toggleOpen}></i>
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
        setUserEmail={setUserEmail}
        setRoom={setRoom}
        joinRoom={joinRoom}
      /> }

      {(showChat && isOpen) &&
      <Chat
        socket={socket} 
        username={username} 
        userEmail={userEmail}
        setUsername={setUsername}
        setUserEmail={setUserEmail}
        room={room} 
        setRoom={setRoom}
        setShowChat={setShowChat}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        /> }
  </div>
  </>
  )
}

export default ChatBlock;
