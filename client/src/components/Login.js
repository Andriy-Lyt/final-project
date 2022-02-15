import React, {useState} from 'react';
import './../styles/App.css';
import './../styles/Login.css';

function Login({setUsername, setRoom, joinRoom}) {
  const[selectedRoom, setSelectedRoom] = useState(1);
  const[nameError, setNameError] = useState('');
  const[formInputName, setFormInputName] = useState('');

  const handleFormInputName = (e) => {
    setFormInputName(e.target.value);
  };

  const clearInputOnFocus = (e) => setNameError('');

  const submitForm = (e) => {
    e.preventDefault();
    if (!formInputName) {
      setNameError("Please enter your Name");
    } 
    if(formInputName) {
      localStorage.setItem('username', formInputName);
      setUsername(formInputName);
      
      localStorage.setItem('room', selectedRoom);
      setRoom(selectedRoom);

      joinRoom(formInputName, selectedRoom);
    }
  }

  const onRoomBtnClick = (event, roomNumber) => {
    localStorage.setItem('room', roomNumber);
    setRoom(roomNumber);
    setSelectedRoom(roomNumber);
  } // closing onRoomBtnClick()

  const btn1Color = selectedRoom === 1 ? 'btn-blue' : '';
  const btn2Color = selectedRoom === 2 ? 'btn-blue' : '';
  
  return (
    <div className="login-container">
        <form className="login-form" onSubmit={submitForm}>

            <div className="error">{nameError}</div>

            <input type="text" className="name-input" placeholder="Your Name.." 
              onChange={handleFormInputName} onFocus={clearInputOnFocus}
              />

            <div className="buttons-div">

              <input type="button" value="Level 1 Support" className={"level-btn " + btn1Color} style={{cursor: "pointer"}}
              onClick={(e) => onRoomBtnClick(e, 1)} />

              <input type="button" value="Level 2 Support" className={"level-btn " + btn2Color} style={{cursor: "pointer"}}
              onClick={(e) => onRoomBtnClick(e, 2)} />
            </div>

<<<<<<< HEAD
          <button type="submit" id="join-btn" className="btn-green">Start Chat</button>
=======
          <button type="submit" id="join-btn" className="btn-green">Join a Room</button>
>>>>>>> andy2
        </form>
    </div>
  )
}

export default Login;
