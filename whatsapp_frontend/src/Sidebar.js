import React from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonuLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOurlined from "@material-ui/icons/SearchOutlined";
import SidebarChat from "./SidebarChat";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const options = [
  "New group",
  "Create a room",
  "Profile",
  "Archived",
  "Starred",
  "Settings",
  "Log out",
];

const ITEM_HEIGHT = 100;

export const Sidebar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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

          <div>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOurlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat
          name="John"
          image="https://unsplash.com/photos/7YVZYZeITc8/download?force=true&w=640"
        />
        <SidebarChat
          name="Nice"
          image="https://unsplash.com/photos/mEZ3PoFGs_k/download?force=true&w=640"
        />
        <SidebarChat
          name="Micheal"
          image="https://unsplash.com/photos/X6Uj51n5CE8/download?force=true&w=640"
        />
        <SidebarChat
          name="Mr.Jamil"
          image="https://unsplash.com/photos/6anudmpILw4/download?force=true&w=640"
        />
        <SidebarChat
          name="Spudy"
          image="https://unsplash.com/photos/d2MSDujJl2g/download?force=true&w=640"
        />
        <SidebarChat
          name="Tolaya"
          image="https://unsplash.com/photos/Mn1Uopx7if8/download?force=true&w=640"
        />
      </div>
    </div>
  );
};
