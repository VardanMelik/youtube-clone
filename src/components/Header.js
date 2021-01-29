import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MicIcon from '@material-ui/icons/Mic';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    return (
        <div className="header">

            <div className="header__left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>

                <img
                    className="header__logo"
                    src="./youtube_logo.png"
                    alt="logo"
                />
            </div>
            

            <div className="header__input">
                <input type="text" placeholder="Search" />
                <SearchIcon className="header__inputButton"/>
                <MicIcon/>
            </div>
            
            <div className="header__icons">
                <VideoCallIcon />
                <AppsIcon/>
                <NotificationsIcon/>
                <Avatar
                    src="https://avatars.githubusercontent.com/u/49842390"
                    alt="Avatar"
                />
            </div>
            
           
        </div>
    )
}

export default Header
