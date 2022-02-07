import React, {useState} from 'react';
import './../styles/App.css';
import io from 'socket.io-client';
import Chat from './Chat';

const socket = io.connect("http://localhost:3001");

function App() {
  const[username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username && room) {
      socket.emit("join_room", room);
      setShowChat(true);
    } 
  }

  return (
    <div className="App-container">
       <h2>Lets Rock the Final!
      <span style={{fontSize:"30px"}}> &#128512; </span>
      Yeah!
      </h2> 
      <br />

      {!showChat ? 
        ( <div className="join-chat-container">
            <h3>Join a Chat</h3>
            <input type="text" placeholder="Name.." onChange={(event) => setUsername(event.target.value)}/>
            <input type="text" placeholder="Room ID.." onChange={(event) => setRoom(event.target.value)}/>
            <button onClick={joinRoom}>Join a Room</button>
        </div>
        ) 
        : ( <Chat socket={socket} username={username} room={room} /> )
      }
    </div>
  )
}

export default App; 