import React, { useEffect, useState } from "react";
import "./App.css";
import Chat from "./Chat";
import { Sidebar } from "./Sidebar";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

  // get data from db
  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);

  // trigger pusher for data insertion
  useEffect(() => {
    var pusher = new Pusher("e78d980c8ec2309ce18c", {
      cluster: "eu",
    });
    var channel = pusher.subscribe("messages");
    channel.bind("inserted", function (newMessage) {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    //cleanup function
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />

        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
