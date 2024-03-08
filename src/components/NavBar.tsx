import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo-Circle.png';
import WhiteMenuIcon from '../assets/images/white-menu-icon.png';
import DropdownMenu from './DropdownMenu';
import '../styles/NavBar.css';

interface NavBarProps {}

const NavBar = ({}: NavBarProps) => {
  const [dropVisible, setDropVisible] = useState(false);
  return (
    <nav className="navbar">
      <div className="left">
        <img className="logo navbar-logo" src={Logo} alt="main logo" />
        <Link to="/">
          <h1 className="navbar-heading">DW Conference</h1>
        </Link>
      </div>
      <div className="right">
        <img
          className="icon navbar-logo"
          src={WhiteMenuIcon}
          alt="menu icon"
          onClick={() => setDropVisible((prev) => !prev)}
        />
        {dropVisible && (
          <DropdownMenu />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
