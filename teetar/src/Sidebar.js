import React from "react";
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button  from "@mui/material/Button";
function Sidebar(){
  return (
    <div className="Sidebar">
    <TwitterIcon className="sidebar__twitterIcon" />


    <SidebarOption active Icon={HomeIcon} text="Home" />
    <SidebarOption Icon={SearchIcon} text="Explore"/>
    <SidebarOption Icon={NotificationsIcon}text="Notifications"/>
    <SidebarOption Icon={MessageIcon}text="Messages"/>
    <SidebarOption Icon={BookmarksIcon}text="Bookmark"/>
    <SidebarOption Icon={FormatListBulletedIcon}text="Lists"/>
    <SidebarOption Icon={AccountBoxIcon}text="Profile"/>

    <SidebarOption Icon={MoreHorizIcon}text="More"/>

    {/*SidebarOption*/}
    {/*SidebarOption*/}
    {/*SidebarOption*/}
    {/*SidebarOption*/}
    {/*SidebarOption*/}
    {/*SidebarOption*/}

    <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
   
  
    </div>
  );
}

export default Sidebar;
