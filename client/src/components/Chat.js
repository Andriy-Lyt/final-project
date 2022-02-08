import React, {useState, useEffect} from 'react';
import './../styles/Chat.css';

function Chat({socket, username, room}) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [formError, setFormError] = useState("");

  const sendMessage = async (e) => {
    console.log(currentMessage);
    e.preventDefault();
    if (currentMessage != '') {     
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
      console.log("data received back from backend: ", data);
      setMessageList((prev) => [...prev, data]);
    });
  }, [socket]);

  return (
    <section className="chat-container">
      <div className="chat-header">
        <h3>Live Chat Support</h3>
        <p>logged in as: {username ? username : "Guest"}</p> 
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
          <textarea rows="3" maxLength="500" placeholder="Type your message.." 
          onChange={(event) => {setCurrentMessage(event.target.value.trim()); setFormError(''); }}
          onKeyPress={onKeyPress}>
          </textarea>
          <button type="submit" > &#9658; </button>
        </form>
    </div>
  </section>
)
}

export default Chat;
