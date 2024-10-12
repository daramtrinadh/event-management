import { useState } from 'react';
import './index.css';
import { IoLocationOutline, IoMenu, IoSearch } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight, MdFavorite } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Header = () => {
    const [displayCategories, setCategories] = useState(false);
    const [showLogoutPopup, setShowLogoutPopup] = useState(false);

    const toggleCategories = () => {
        setCategories((prev) => !prev);
    };

    const handleUserClick = () => {
        setShowLogoutPopup((prev) => !prev);
    };

    const handleLogout = () => {
        localStorage.removeItem('eventtoken');
        setShowLogoutPopup(false);
        window.location.reload();
    };

    return (
        <div>
            <div className='header'>
                <div className='logo-section'>
                    <h1 className='logo-title'>BookUsNow</h1>
                    <div className='location-section'>
                        <IoLocationOutline />
                        <p>Mumbai, India</p>
                        <MdOutlineKeyboardArrowRight />
                    </div>
                </div>
                <div className='mobile-user-section'>
                    <IoSearch size={25} className='search-icon' />
                    <MdFavorite size={25} className='fav-icon' />
                    <FaUser size={25} className='user-icon' onClick={handleUserClick} />
                </div>

                <div className='search-section'>
                    <div className='categories' onClick={toggleCategories}>
                        <IoMenu className='menu-icon' size={25} />
                        <p className='cat-text'>Categories</p>
                    </div>
                    <div className='input-section'>
                        <input className='search-input' placeholder='DJI Phontom...' />
                        <IoSearch size={23} className='search-icon' />
                    </div>
                </div>

                <div className='user-section'>
                    <div className='fav-section'>
                        <MdFavorite size={28} className='fav-icon' />
                        <p>Favorites</p>
                        <FaUser size={25} className='user-icon' onClick={handleUserClick} />
                    </div>
                </div>
            </div>

            {displayCategories && (
                <div className='categories-items'>
                    <p>Live Shows</p>
                    <p>Streams</p>
                    <p>Movies</p>
                    <p>Plays</p>
                    <p>Events</p>
                    <p>Sports</p>
                    <p>Activities</p>
                </div>
            )}

            <div className='categories-items-mobile'>
                <div className='item'>Live</div>
                <div className='item'>Streams</div>
                <div className='item'>Movies</div>
                <div className='item'>Plays</div>
                <div className='item'>Events</div>
                <div className='item'>Sports</div>
                <div className='item'>Activities</div>
            </div>

            {showLogoutPopup && (
                <div className='logout-popup'>
                    <p>Logout</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    );
};

export default Header;
