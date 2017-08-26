import React from 'react';
import Mailchimp from '../../components/mailchimp/';
import SocialLinks from '../../components/social_links/';
import './index.css';

class Subscribe extends React.Component {
  render() {
    const { data, config } = this.props;

    return (
      <section className="subscribe section">
        <Mailchimp data={data} />
        <SocialLinks config={config} />
      </section>
    )
  }
}

export default Subscribe;
