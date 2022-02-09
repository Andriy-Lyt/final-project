import React, {useState, /* useRef */} from 'react';
import './../styles/App.css';
import io from 'socket.io-client';
import ChatBlock from './ChatBlock';

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
    <div className="App-container">

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