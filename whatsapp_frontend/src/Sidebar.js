import React from 'react'
import './Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core';
import DonuLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOurlined from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://avatars1.githubusercontent.com/u/52131981?s=88&u=fde48fb7ed15f03d5cd9d19d3eb42c967065ecce&v=4" />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonuLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOurlined/>
                    <input type="text" placeholder="Search or start new chat"/>
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}
