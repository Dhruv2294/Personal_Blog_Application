import React from 'react';
import { FaHome, FaSearch, FaHeart, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link
import '../App.css';
import { IoMdAddCircleOutline } from "react-icons/io";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
       
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFBSZyVvCzdDeIujxwqy4SFlrUk-d05RUTw&s" alt="404 Error" style={{ width: "80px", height: "80px" ,backgroundColor:"transparent" }} />
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <FaSearch className="search-icon" />
      </div>
      <nav className="navigation">
        <ul>
          <li><Link to="/" className="icon"><FaHome /></Link></li>
          <li><Link to="/new-post" className="icon"> <IoMdAddCircleOutline /></Link></li> 
          <li><FaHeart className="icon" /></li>
          <li><FaUserCircle className="icon" /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
