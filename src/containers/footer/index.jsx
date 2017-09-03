import _ from 'lodash';
import React, { Component } from 'react';
import Link from 'gatsby-link';
import Affixed from '../../containers/affixed/';
import Quote from '../../components/quote/';
import Message from '../../components/message/';
import config from '../../../data/config';
import quotes from '../../../data/quotes';
import './index.css';

class Footer extends Component {
  getQuote() {
    return _.sample(quotes);
  }

  render() {
    const quote = this.getQuote();

    return (
      <footer className="footer">
        <Affixed type="centered">
          <Quote figure data={quote} />
          <Message type="copyright" message={config.copyright} />
        </Affixed>
      </footer>
    );
  }
}

export default Footer;
