import React, {useState, useRef} from 'react';
import './../styles/App.css';
import io from 'socket.io-client';
import Chat from './Chat';
import Login from './Login';

const socket = io.connect("http://localhost:3001");

function App() {
  const[username, setUsername] = useState(localStorage.getItem('username') || '');
  const [room, setRoom] = useState(localStorage.getItem('room') || '');
  const [showChat, setShowChat] = useState(room);
  const [isOpen, setIsOpen] = useState(false);

  const joinRoom = (username, room) => {
    if (username && room) {
      socket.emit("join_room", room);
      setShowChat(room);
    } 
  }

  const toggleOpen = () => setIsOpen(!isOpen);
  // const chatWindow = useRef(null);

  return (
    <div className="App-container">

      <div className="chat-window-container" /* ref={chatWindow} */
        style={isOpen ? {height: "400px" /* chatWindow.current.scrollHeight + "px" */}
      : {height: "36px"}
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
          />
          }
      </div>
      
    </div>
  )
}

export default App; 