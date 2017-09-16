import React from 'react';
import Link from 'gatsby-link';
import Button from '../../components/button/';
import config from '../../../data/config';
import './index.scss';

const prefix = process.env.NODE_ENV === 'production' ? config.pathPrefix ? config.pathPrefix : '' : '';

class Menu extends React.Component {
  render() {
    const { pages, location, action } = this.props;

    return (
      <figure className="menu figure">
        <Button type="transparent"
                icon="menu"
                action={action} />
        <nav className="navigation">
          {pages.map(page => (
            <Link key={page.id}
                  className="link"
                  to={page.path.replace(prefix, '')}
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
