import React, {useState, useEffect} from 'react';
import './../styles/Chat.css';

function Chat({socket, username, room, setRoom, setUsername, setShowChat, isOpen, setIsOpen}) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [formError, setFormError] = useState("");

  const logoutUser = () => {
      localStorage.setItem('room', ''); 
      setRoom('');
      localStorage.setItem('username', '');
      setUsername('');
      setShowChat('');
      setIsOpen(!isOpen);
  }

  const sendMessage = async (e) => {
    // console.log(currentMessage);
    e.preventDefault();
    if (currentMessage !== '') {     
      const hours =  new Date(Date.now()).getHours();
      const printHours = hours < 10 ? `0${hours}` : hours;
      const minutes = new Date(Date.now()).getMinutes();
      const printMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const messageData = {
        room: room, //comes from props
        user: username,
        message: currentMessage,
        time: `${printHours}:${printMinutes}`
      };
      await socket.emit("send_message", messageData);
      setMessageList((prev) => [...prev, messageData]);
    } else {
      setFormError("Please enter the Message");
    }
    e.target.value = '';
    setCurrentMessage('');
}

 function onKeyPress(e) {
   if ( e.key === "Enter" && !e.shiftKey) {
    sendMessage(e);
   }
 }

 useEffect(() => { 
   socket.on("receive_message", (data) => {
      // console.log("data received back from backend: ", data);
      setMessageList((prev) => [...prev, data]);
    });
  }, [socket]);

  return (
    <section className="chat-container">
      <div className="chat-header">
        <h4 style={{fontSize:"16px"}}>Level {room} Support</h4>
        <div className="logout-div">
          <span>Hi {username ? username : "Guest"}!</span> 
          <button type="text" className="btn-red" onClick={logoutUser} >
            End chat
          </button>
        </div>
      </div>

      <div className="chat-body">
        {messageList.map((mes, i) => {
           return (
             <div key={i} className="message-div" data-id={username === mes.user ? "support" : "client"} >
               <p className="message-time">{mes.time}, {mes.user} says:</p>
               {/* <p className="message-user">{mes.user} says:</p> */}
               <p className="message-text">{mes.message}</p>
             </div>
           ) 
        }
        )}
      </div>

      <div className="form-container">
       {formError && <div className="error"> {formError} </div>}
        <form className="chat-form" onSubmit={sendMessage}>        
          <textarea rows="2" maxLength="500" placeholder="Type your message.." 
          onChange={(event) => {setCurrentMessage(event.target.value.trim()); setFormError(''); }}
          onKeyPress={onKeyPress}>
          </textarea>
          <button type="submit" className="btn-green"> &#9658; </button>
        </form>
    </div>
  </section>
)
}

export default Chat;
