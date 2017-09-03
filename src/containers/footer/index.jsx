import _ from 'lodash';
import React, { Component } from 'react';
import Link from 'gatsby-link';
import Quote from '../../components/quote/';
import config from '../../../data/config';
import quotes from '../../../data/quotes';
import './index.css';

class Footer extends Component {
  getQuote() {
    return _.sample(quotes);
  }

  render() {
    const quote = this.getQuote();
    // @TODO: create caption component for copyright message
    // add url to company/author website inside copyright message

    return (
      <footer className="footer">
        <section className="affixed bottom section">
          <Quote figure data={quote} />
          <p className="copyright caption">{config.copyright}</p>
        </section>
      </footer>
    );
  }
}

export default Footer;
