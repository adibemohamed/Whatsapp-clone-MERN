import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOurlined from "@material-ui/icons/SearchOutlined";
import InsertEmotionIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seeen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOurlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Adibe</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message chat__reciever">
                    <span className="chat__name">Adibe</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Adibe</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmotionIcon />
                <form>
                    <input
                        // value={input}
                        // onChange={(e) => setInput(e.target.value)}
                        placeholder="type a message"
                        type="text"
                    />
                    <button type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    );
}

export default Chat;
