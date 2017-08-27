import React from 'react';
import Link from 'gatsby-link';
import './index.css';

class Menu extends React.Component {
  render() {
    const { pages, location, action } = this.props;

    return (
      <figure className="menu figure">
        <button className="transparent button"
                type="button"
                onClick={action}>
          <i className="menu icon"></i>
        </button>
        <nav className="navigation">
          {pages.map(page => (
            <Link key={page.id}
                  className="link"
                  to={page.path}
                  onClick={action}>
              {page.id}
            </Link>
          ))}
        </nav>
      </figure>
    );
  }
}

export default Menu;
