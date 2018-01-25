import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <div className="sans-serif">
    <h1 className="pl3 mt2">
      <Link to="/" className="f4 ml1 link no-underline dark-gray dim">
        Posts
      </Link>
      <Link to="/about" className="f4 ml3 link no-underline dark-gray dim">
        About
      </Link>
    </h1>
  </div>
);

export default Header;
