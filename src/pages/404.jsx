import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Hero from '../containers/hero/';
import config from '../../data/config';

class ErrorIndex extends React.Component {
  render() {
    const hero = {
      title: '404',
      caption: 'You are lost'
    };
    return (
      <div className="error page">
        <Helmet title={`404 | ${config.siteTitle}`} />
        <Hero data={hero} />
        <section className="redirect section">
          <figure className="message figue">
            <p className="message">
              Find your way <Link className="link" to="/">home</Link>!
            </p>
          </figure>
        </section>
      </div>
    );
  }
}

export default ErrorIndex;
