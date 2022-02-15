import React, {useState, /* useRef */} from 'react';
import io from 'socket.io-client';
import ChatBlock from './ChatBlock';
import HomePage from './HomePage';
import './../styles/App.css';
<<<<<<< HEAD
=======
import Bubble from './Bubble';
>>>>>>> andy2

const socket = io.connect("http://localhost:3001");

function App() {
  const[username, setUsername] = useState(localStorage.getItem('username') || '');
  const [room, setRoom] = useState(localStorage.getItem('room') || '');
  const [showChat, setShowChat] = useState(room);


  const joinRoom = (username, room) => {
    if (username && room) {
      socket.emit("join_room", room);
      setShowChat(room);
    } 
  }

  // const chatWindow = useRef(null);

  return (
    <div className="app-container">
      <HomePage />
<<<<<<< HEAD
      
=======
>>>>>>> andy2
      <ChatBlock
        setUsername={setUsername}
        setRoom={setRoom}
        joinRoom={joinRoom}
        socket={socket} 
        username={username} 
        room={room} 
        showChat={showChat}
        setShowChat={setShowChat}
      />
           
    </div>
  )
}

export default App; 