import React, { useState } from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';

function Navbar() { 
    const [isScrolled,setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolled ? 'navbar scrolled' : 'navbar'} >
            <div className='container'>
                <div className='left'>
                    <img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='Netflix' />

                    <span> HomePage</span>
                    <span> Series</span>
                    <span> Movies</span>
                    <span>New Releases</span>
                    <span>My List</span>

                </div>
                <div className='right'>
                    <SearchIcon className='icons' />
                    <span>Kid</span>
                    <NotificationsIcon className='icons' />
                    <PersonIcon className='avatar' />
                    <div className='profile'>
                        <ArrowDropDownIcon className='icons' />
                        <div className='options'>
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar