import React from "react";

export default function Intro(props) {
  return(
    <div>
    <h2> Hi {props.caller}</h2>
    <label> Welcome to Lighthouse mart
    Please feel free to ask any questions or look
    through our knowledge base to find your own
    answers!
    </label>
    </div>
  );
}