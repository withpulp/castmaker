import React from 'react';
import Mailchimp from '../../components/mailchimp/';
import SocialLinks from '../../components/social_links/';
import './index.css';

class Subscribe extends React.Component {
  render() {
    const { config } = this.props;
    const mailchimp = {
      action: config.mailchimpAction,
      disclaimer: 'We will send regular updates to your inbox at no cost, you can unsubscribe at any time.'
    };

    return (
      <section className="subscribe section">
        <Mailchimp data={mailchimp} />
        <SocialLinks config={config} labeled />
      </section>
    )
  }
}

export default Subscribe;
