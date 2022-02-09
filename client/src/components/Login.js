import React, {useState} from 'react';
import './../styles/App.css';
import './../styles/Login.css';

function Login({setUsername, setRoom, joinRoom}) {
  const[currentNumber, setCurrentNumber] = useState(1);

  const onRoomBtnClick = (event, roomNumber) => {

    localStorage.setItem('room', roomNumber);
    setRoom(roomNumber || '');

    setCurrentNumber(roomNumber);

  } // closing onRoomBtnClick()

  const btn1Color = currentNumber == 1 ? 'btn-blue' : '';
  const btn2Color = currentNumber == 2 ? 'btn-blue' : '';
  
  return (
    <div className="login-container">
        <h3>Support Chat</h3>
        <form className="login-form" onSubmit={e => e.preventDefault()}>

            <input type="text" className="name-input" placeholder="Your Name.." 
              onChange={(event) => {
                localStorage.setItem('username', event.target.value);
                setUsername(event.target.value);
                }
              }/>

            <div className="buttons-div">

              <input type="button" value="Level 1 Support" className={"level-btn " + btn1Color} 
              onClick={(e) => onRoomBtnClick(e, 1)} />

              <input type="button" value="Level 2 Support" className={"level-btn " + btn2Color} 
              onClick={(e) => onRoomBtnClick(e, 2)} />
            </div>

          <button id="join-btn" className="btn-green" onClick={joinRoom}>Join a Room</button>
        </form>
    </div>
  )
}

export default Login;
