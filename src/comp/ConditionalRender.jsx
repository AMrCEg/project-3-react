//7:28:46 Conditional Rendering

// import React from 'react'
import React, { useState } from "react";

import Joke from "./Joke";
import { jocksData } from "./jocksData";

const ConditionalRender = () => {
  // jokes Example
  // let jokes = jocksData.map((joke) => (
  //   <Joke key={joke.id} setup={joke.setup} Punchline={joke.Punchline} />
  // ));

  // messages Example
  const [messages, setMessages] = useState(["a", "b"]);
  // const [messages, setMessages] = useState(["a"]);
  // const [messages, setMessages] = useState([]);

  // const message = messages.map((message) => <h1>{message}</h1>);

  return (
    <>
      <main>
        {/* // jokes Example */}
        {/* {jokes} */}

        {/* // messages Example */}

        {/* {messages.length > 0 && (
          <h1>You have {messages.length} unread messages!</h1>
        )} */}

        {/* {messages.length && (
          <h1>You have {messages.length} unread messages!</h1>
        )} */}

        {messages.length === 0 ? (
          <h1>You're all caught up!</h1>
        ) : (
          <h1>
            You have {messages.length} unread
            {messages.length > 1 ? " messages" : " message"}!
          </h1>
        )}
      </main>
    </>
  );
};

export default ConditionalRender;
