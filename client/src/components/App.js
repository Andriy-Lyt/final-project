import React, {useState} from 'react';
import './../styles/App.css';
import io from 'socket.io-client';
import Chat from './Chat';
import Login from './Login';

const socket = io.connect("http://localhost:3001");

function App() {
  const[username, setUsername] = useState(localStorage.getItem('username') || '');
  const [room, setRoom] = useState(localStorage.getItem('room') || '');
  const [showChat, setShowChat] = useState(room);

  const joinRoom = () => {
    if (username && room) {
      socket.emit("join_room", room);
      setShowChat(room);
    } 
  }

  return (
    <div className="App-container">

      {!showChat && 
      <Login 
        setUsername={setUsername}
        setRoom={setRoom}
        joinRoom={joinRoom}
      /> }   

      {showChat && 
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
  )
}

export default App; 