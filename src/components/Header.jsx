import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header >
      <div className="logo" >
        
      </div>
      <nav s>
        <Link to="/" >home</Link>
        <Link to="/page1" >Page 1</Link>
        <Link to="/page2" >Page 2</Link>
      </nav>
    </header>
  );
};

export default Header;