import React, {useState} from 'react';
import './../styles/App.css';
import io from 'socket.io-client';
import Chat from './Chat';
import Login from './Login';

const socket = io.connect("http://localhost:3001");

function App() {
  const[username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (username && room) {
      socket.emit("join_room", room);
      setShowChat(true);
    } 
  }

  return (
    <div className="App-container">
      <header>
        <h2 style={{textAlign:"center"}}>Lets Rock the Final!
        <span style={{fontSize:"30px"}}> &#128512; </span>
        Yeah!
        </h2> 
      </header>

      <Login 
        setUsername={setUsername}
        setRoom={setRoom}
        joinRoom={joinRoom}
      />  

      <Chat socket={socket} username={username} room={room} />
      
    </div>
  )
}

export default App; 