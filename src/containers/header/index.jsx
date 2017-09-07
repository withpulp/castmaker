import React, { Component } from 'react';
import Headroom from 'react-headroom';
import Link from 'gatsby-link';
import Image from '../../components/image/';
import Menu from '../../components/menu/';
import config from '../../../data/config';
import pages from '../../../data/pages';
// @TODO: find a better way to handle styles for different headroom states
// headroom docs: https://kyleamathews.github.io/react-headroom/
import './index.css';

class Header extends Component {
  render() {
    const { location, action } = this.props;

    return (
      <header className="header">
        <Headroom disableInlineStyles>
          <Link className="link"
                to="/">
            <Image type="logo"
                   image={config.siteLogo} />
          </Link>
          <Menu pages={pages} location={location} action={action} />
        </Headroom>
      </header>
    )
  }
}

export default Header;
