import React, {useState} from 'react';
import './../styles/Login.css';

function Login({setUsername, setRoom, joinRoom}) {
  return (
    <div className="login-container">
        <h3>Join a Chat</h3>
        <form onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Name.." onChange={(event) => setUsername(event.target.value)}/>
          <input type="text" placeholder="Room ID.." onChange={(event) => setRoom(event.target.value)}/>
          <button onClick={joinRoom}>Join a Room</button>
        </form>
    </div>
  )
}

export default Login;
