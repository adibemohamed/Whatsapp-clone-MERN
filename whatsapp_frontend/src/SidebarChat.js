import React from 'react'
import "./SidebarChat.css";
import { Avatar } from '@material-ui/core';

function SidebarChat({name, image}) {
    return (
        <div className="sidebarChat">
            <Avatar src={image} />
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>This is the last message</p>
            </div>
            
        </div>
    )
}

export default SidebarChat
