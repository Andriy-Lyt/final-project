import React from 'react';

export default function Conversation(props) {
  return(
    <div>
      <label>Start a conversation</label>
      <input placeholder="Type your question..."/>
      <button>Send us a message</button>
    </div>
  );
}