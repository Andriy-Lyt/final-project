import React, {useState, useEffect, useRef} from 'react';
import './../styles/Chat.css';

function Chat({socket, username, setUsername, userEmail, setUserEmail, room, setRoom, setShowChat, isOpen, setIsOpen}) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState(localStorage.getItem("messageList") ? JSON.parse(localStorage.getItem("messageList")) : []);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    localStorage.setItem("messageList", JSON.stringify(messageList));
  }, [messageList]);

  const logoutUser = () => {
      localStorage.setItem('room', ''); 
      setRoom('');
      localStorage.setItem('username', '');
      setUsername('');
      localStorage.setItem('useremail', '');
      setUserEmail('');
      setShowChat('');
      setIsOpen(!isOpen);
      localStorage.setItem("messageList", []);
  }

  const sendMessage = async (e) => {
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

  const lastMesRef = useRef(null);

  useEffect(() => {
    lastMesRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [currentMessage]);

  return (
    <section className="chat-container">
        {/* Logout Button */}
        <button type="text" className="btn-red logout-btn" onClick={logoutUser} >
             Logout
        </button>

      {/* Chat Header */}
      <div className="chat-header">
          <h4 className="h4">Hi {username ? username : "Guest"}!</h4> 
          <p>Welcome to our support system.</p>
          <p>Please feel free to ask a question or to search our knowledge base.</p>
      </div>

      {/* Display Chat messages */}
      <div className="chat-body">

        {messageList.map((mes, i) => {
           return (
             <div ref={lastMesRef} key={i} className="message-div" data-id={username === mes.user ? "support" : "client"} >
               <p className="message-time">{mes.time}, {mes.user} says:</p>
               <p className="message-text">{mes.message}</p>
             </div>
           ) 
          }
        )}
      </div>

      {/* Send Chat Messages */}
      <div className="form-container">
       {formError && <div className="error"> {formError} </div>}
        <form className="chat-form" onSubmit={sendMessage}>        
          <textarea maxLength="500" placeholder="Type your message.." 
          onChange={(event) => {setCurrentMessage(event.target.value.trim()); setFormError(''); }}
          onKeyPress={onKeyPress}>
          </textarea>
          <button type="submit" className="btn-green mes-send-btn"> &#9658; </button>
        </form>
    </div>

    {/* Search Knowledge Base */}
    <div className="KB-div">
      <h4 className="h4">Knowledge Base</h4>
      <form className="search-form">
        <div className="search-input-div">
          <input type="text" placeholder="Search.." />
          <button type="submit" className="btn-green search-btn"><i className="fa fa-search"></i></button>
        </div>
      </form>
    </div>

    <div className="search-results-container">
      <h4 className="h4">Search Results</h4>
      <div className="search-results-div">
        <p><a href="https://support.avaya.com/public/index?page=content&id=PRCS100796&actp=LIST_POPULAR&rp=home" target="_blank" rel="noreferrer">PRCS100796</a> IT Help Contact Information for Customers</p> 
        <p><a href="https://support.avaya.com/public/index?page=content&id=TRNG100385&actp=LIST_POPULAR&rp=home" target="_blank" rel="noreferrer">TRNG100385</a> Tips for Searching effectively on support site</p> 
        <p><a href="https://support.avaya.com/public/index?page=content&id=SOLN265671&actp=LIST_POPULAR&rp=home" target="_blank" rel="noreferrer">SOLN265671</a> Avaya one-X Agent: Error "your login attempt unsuccessful</p> 
         <p><a href="https://support.avaya.com/public/index?page=content&id=SOLN139197&actp=LIST_POPULAR&rp=home" target="_blank" rel="noreferrer">SOLN139197</a> Daylight Saving Time Change Information</p> 
        <p><a href="https://support.avaya.com/public/index?page=content&id=PRCS100833&actp=LIST_POPULAR&rp=home" target="_blank" rel="noreferrer">PRCS100833</a> Avaya Support Website Tips and Troubleshooting: Parts Menu Choice Options</p>  
      </div>
    </div>


  </section>
)
}

export default Chat;
