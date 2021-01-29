import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';

function Header() {
    return (
        <div className="header">

            <IconButton>
                <MenuIcon/>
            </IconButton>

            <img
                className="header__logo"
                src="./youtube_logo.png"
                alt="logo"
            />
            <input type="text" />
            <SearchIcon/>
            <VideoCallIcon />
            <AppsIcon/>

        </div>
    )
}

export default Header
