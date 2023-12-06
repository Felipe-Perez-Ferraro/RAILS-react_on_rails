import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/new">
            <li>Create Post</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
