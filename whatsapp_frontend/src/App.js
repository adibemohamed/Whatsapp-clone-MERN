import React, { useEffect } from "react";
import "./App.css";
import Chat from "./Chat";
import { Sidebar } from "./Sidebar";
import Pusher from "pusher-js";

function App() {
  useEffect(() => {}, []);

  useEffect(() => {
    var pusher = new Pusher("e78d980c8ec2309ce18c", {
      cluster: "eu",
    });
    var channel = pusher.subscribe("messages");
    channel.bind("inserted", function (data) {
      alert(JSON.stringify(data));
    });
  }, []);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />

        <Chat />
      </div>
    </div>
  );
}

export default App;
