import React, { Component } from 'react';
import Headroom from 'react-headroom';
import Link from 'gatsby-link';
import Menu from '../../components/menu/';
import config from '../../../data/config';
import './index.css';

class Header extends Component {
  render() {
    const { action } = this.props;

    return (
      <header className="header">
        <Headroom disableInlineStyles>
          <Link className="link"
                to="/">
            <img className="logo image" src={config.siteLogo} />
          </Link>
          <Menu location={location} action={action} />
        </Headroom>
      </header>
    )
  }
}

export default Header;
