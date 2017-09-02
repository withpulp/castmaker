import _ from 'lodash';
import React, { Component } from 'react';
import Link from 'gatsby-link';
import Quotes from '../../components/quotes/';
import config from '../../../data/config';
import quotes from '../../../data/quotes';
import './index.css';

class Footer extends Component {
  render() {
    const url = config.siteRss;
    // @TODO: create caption component for copyright message
    // add url to company/author website inside copyright message
    
    return (
      <footer className="footer">
        <section className="affixed bottom section">
          <Quotes data={quotes} />
          <p className="copyright caption">{config.copyright}</p>
        </section>
      </footer>
    );
  }
}

export default Footer;
