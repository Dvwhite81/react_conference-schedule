import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import Logo from '../assets/images/Logo-Circle.png';
import MenuIcon from '../assets/images/white-menu-icon.png';
import DropdownMenu from './DropdownMenu';
import '../styles/NavBar.css';

interface NavBarProps {
}

const NavBar = ({}: NavBarProps) => {
  const [dropVisible, setDropVisible] = useState(false);
  return (
    <nav className="navbar">
      <div
        className="left"
        data-tooltip-id="nav-home-tip"
        data-tooltip-content={'Home'}
      >
        <Link to="/">
          <img className="logo navbar-logo" src={Logo} alt="main logo" />
        </Link>
        <Link to="/">
          <h1 className="navbar-heading">Conference</h1>
        </Link>
        <Tooltip id="nav-home-tip" />
      </div>
      <div className="right">
        <div className="nav-right-links">
          <a>Home</a>
          <a>Speakers</a>
          <a>Agenda</a>
        </div>
        <img
          className="icon navbar-logo"
          src={MenuIcon}
          alt="menu icon"
          onClick={() => setDropVisible((prev) => !prev)}
        />
        {dropVisible && <DropdownMenu />}
      </div>
    </nav>
  );
};

export default NavBar;
