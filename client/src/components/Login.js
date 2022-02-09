import React, {useState, useEffect} from 'react';
import './../styles/App.css';
import './../styles/Login.css';

function Login({setUsername, setRoom, joinRoom}) {
  const[btn1Color, setBtn1Color] = useState('');
  const[btn2Color, setBtn2Color] = useState('');

  console.log("rerender");
  
/*   useEffect(() => {
    if (activeBtn == 1) {
      btn1Color = 'btn-blue';
      btn2Color = '';
    }
    if (activeBtn == 2) {
      btn1Color = '';
      btn2Color = 'btn-blue';
    }  
  }, [activeBtn]);

 */  
    const onRoomBtnClick = (event) => {
    const roomNumber =  event.target.value.substring(6, 7);

    localStorage.setItem('room', roomNumber);
    setRoom(roomNumber || '');

    if (roomNumber == 1) {
      setBtn1Color('btn-blue');
      setBtn1Color('');
    }
    if (roomNumber == 2) {
      setBtn1Color('');
      setBtn1Color('btn-blue');
    }  

    console.log("btn1Color: ", btn1Color);
    console.log("btn2Color: ", btn2Color);
  
  } // closing onRoomBtnClick()


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
              <input type="button" value="Level 1 Support" className={"level-btn " + /* " btn-blue " */ + {btn1Color}} onClick={onRoomBtnClick} />
              <input type="button" value="Level 2 Support" className={"level-btn " + {btn2Color}} onClick={onRoomBtnClick} />
            </div>

          <button id="join-btn" className="btn-green" onClick={joinRoom}>Join a Room</button>
        </form>
    </div>
  )
}

export default Login;
