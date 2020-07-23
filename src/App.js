import React, { useState, useEffect } from "react";
import { Button, FormControl, Input } from "@material-ui/core";
import { Message } from "./Message";
import "./App.css";
import db from "./Firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
  //setting states
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    //snapshot is all the docs in db
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        //using map to grab each document in db
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    //prompts user for name and sets state
    setUser(prompt("Please Enter Your Name"));
  }, []);

  //logic for sending message
  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("messages").add({
      message: input,
      username: user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h1>Real Time Messenging App! 😁</h1>
      <h2>Welcome {user}</h2>

      {/* wrapping in form allows for hitting enter or clicking submit button to send message*/}
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message... "
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <IconButton
            className="app__iconButton"
            //disabled prevents empty messages from entering the chat
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon color="primary" />
          </IconButton>
        </FormControl>
      </form>

      {/* displays message to browser, flip moves adds animation when adding messge*/}
      <FlipMove className="flipMove">
        {messages.map(({ id, message }) => (
          <Message key={id} username={user} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
