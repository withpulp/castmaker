import _ from 'lodash';
import React, { Component } from 'react';
import Link from 'gatsby-link';
import Quotes from '../../components/quotes/';
import config from '../../../data/config';
import quotes from '../../../data/quotes';
import './index.css';

class Footer extends Component {
  renderCTA() {
    const path = this.props.location.pathname;

    let cta;

    // @TODO: refactor to
    // if path includes '/posts/slug' show null
    // else show quotes
    if (path === '/' || path === '/about' || path === '/posts' || path === '/404')  {
      cta = (
        <Quotes data={quotes} />
      )
    } else {
      cta = null;
    }

    return cta;
  }

  render() {
    const url = config.siteRss;
    // @TODO: create caption component for copyright message
    // add url to company/author website inside copyright message

    return (
      <footer className="footer">
        <section className="affixed bottom section">
          { this.renderCTA() }
          <p className="copyright caption">{config.copyright}</p>
        </section>
      </footer>
    );
  }
}

export default Footer;
