import _ from 'lodash';
import React, { Component } from 'react';
import Link from 'gatsby-link';
import Quote from '../../components/quote/';
import Message from '../../components/message/';
import config from '../../../data/config';
import quotes from '../../../data/quotes';
import './index.css';

class Footer extends Component {
  getQuote() {
    return _.sample(quotes);
  }

  // @TODO: create affxed container
  render() {
    const quote = this.getQuote();

    return (
      <footer className="footer">
        <section className="affixed bottom section">
          <Quote figure data={quote} />
          <Message type="copyright" message={config.copyright} />
        </section>
      </footer>
    );
  }
}

export default Footer;
