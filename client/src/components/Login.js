import React, {useState} from 'react';
import './../styles/App.css';
import './../styles/Login.css';

function Login({setUsername, setRoom, joinRoom}) {
  const[selectedRoom, setSelectedRoom] = useState(1);
  const[nameError, setNameError] = useState('');
  const[formInputName, setFormInputName] = useState('');

  const handleformInputName = (e) => setFormInputName(e.target.value);

  const submitForm = (e) => {
    e.preventDefault();
    if (!formInputName) {
      setNameError("Please enter your Name");
    } 
    if(formInputName) {
      console.log("line 18 runs");
      localStorage.setItem('username', formInputName);
      setUsername(formInputName);
      
      console.log("formInputName: ", formInputName);

      localStorage.setItem('room', selectedRoom);
      setRoom(selectedRoom);

      console.log("selectedRoom: ", selectedRoom);

      joinRoom(formInputName, selectedRoom);
    }
  }

  const onRoomBtnClick = (event, roomNumber) => {
    localStorage.setItem('room', roomNumber);
    setRoom(roomNumber);
    setSelectedRoom(roomNumber);
  } // closing onRoomBtnClick()

  const btn1Color = selectedRoom == 1 ? 'btn-blue' : '';
  const btn2Color = selectedRoom == 2 ? 'btn-blue' : '';
  
  return (
    <div className="login-container">
        <h3>Support Chat</h3>
        <form className="login-form" onSubmit={submitForm}>

            <div className="error">{nameError}</div>

            <input type="text" className="name-input" placeholder="Your Name.." 
              onChange={handleformInputName}
              />

            <div className="buttons-div">

              <input type="button" value="Level 1 Support" className={"level-btn " + btn1Color} 
              onClick={(e) => onRoomBtnClick(e, 1)} />

              <input type="button" value="Level 2 Support" className={"level-btn " + btn2Color} 
              onClick={(e) => onRoomBtnClick(e, 2)} />
            </div>

          <button type="submit" id="join-btn" className="btn-green">Join a Room</button>
        </form>
    </div>
  )
}

export default Login;
