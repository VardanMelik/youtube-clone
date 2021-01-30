import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MicIcon from '@material-ui/icons/Mic';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom'; 
import Logo from '../assets/youtube_logo.png';

function Header() {

    const [inputSearch, setInputSearch] = useState('');
    console.log(inputSearch);
    return (
        <div className="header">

            <div className="header__left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <Link to="/">
                    <img
                        className="header__logo"
                        src={Logo}
                        alt="logo"
                    />
                </Link>
            </div>
            

            <div className="header__input">
                <input
                    onChange={ e => setInputSearch(e.target.value) }
                    value={inputSearch} 
                    type="text" placeholder="Search" 
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton"/>
                </Link>
                
                <MicIcon/>
            </div>
            
            
            <div className="header__icons">
            
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                <Avatar
                    src="https://avatars.githubusercontent.com/u/49842390"
                    alt="Avatar"
                />
            </div>
            
           
        </div>
    )
}

export default Header
