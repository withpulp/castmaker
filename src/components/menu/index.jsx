import React from 'react';
import Link from 'gatsby-link';
import './index.css';

class Menu extends React.Component {
  render() {
    const { location, action } = this.props;

    return (
      <figure className="menu figure">
        <button className="transparent button"
                type="button"
                onClick={action}>
          <i className="menu icon"></i>
        </button>
        <nav className="navigation">
          <Link className="link"
                to="/"
                onClick={action}>
            Home
          </Link>
          <Link className="link"
                to="/about"
                onClick={action}>
            About
          </Link>
          <Link className="link"
                to="/posts"
                onClick={action}>
            Posts
          </Link>
        </nav>
      </figure>
    );
  }
}

export default Menu;
