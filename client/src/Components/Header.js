import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="border-b p-3 flex justify-between items-center">
      <ul>
        <li>
          <Link to="/">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
