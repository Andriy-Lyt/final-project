import React, {useState, /* useRef */} from 'react';
import io from 'socket.io-client';
import ChatBlock from './ChatBlock';
import HomePage from './HomePage';
import './../styles/App.css';
import Bubble from './Bubble';

const socket = io.connect("http://localhost:3001");

function App() {
  const[username, setUsername] = useState(localStorage.getItem('username') || '');
  const[userEmail, setUserEmail] = useState(localStorage.getItem('useremail') || '');
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
      <ChatBlock
        setUsername={setUsername}
        setUserEmail={setUserEmail}
        setRoom={setRoom}
        joinRoom={joinRoom}
        socket={socket} 
        username={username} 
        userEmail={userEmail}
        room={room} 
        showChat={showChat}
        setShowChat={setShowChat}
      />
           
    </div>
  )
}
export default App; 