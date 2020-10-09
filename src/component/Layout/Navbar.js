import React from 'react';
import Logo from "../../Images/logo.png";
import Profile from "../../Images/profile_pic.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar p-0">
        <div className="logo_items">
          <img src={Logo}></img>
          <Link to="/">HOME</Link>
          <Link to="profile">PROFILE</Link>
          <Link to="schedule">SCHEDULE APPOINTMENTS</Link>
        </div>
        <div className="profile_nav">
          <p>Hello!<br/>
            Dmitry Galkin</p>
          <img src={Profile}/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
