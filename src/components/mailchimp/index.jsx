import React from 'react';
import jQuery from 'jquery';
import Headline from '../../components/headline';
import Message from '../../components/message';
import './index.css';

// @TODO: create or use a react npm package for mailchimp
class Mailchimp extends React.Component {
  componentDidMount() {
    (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);
  }

  renderHeadline() {
    const { level, title, caption } = this.props;
    let setLevel;

    if (level) {
      setLevel = level;
    } else {
      setLevel = 1;
    }

    if (title) {
      return <Headline level={setLevel}
                       title={title}
                       caption={caption} />;
    } else {
      return null;
    }
  }

  renderMessage() {
    const { disclaimer } = this.props;

    if (disclaimer) {
      return <Message type="disclaimer" message={disclaimer} />;
    } else {
      return null;
    }
  }

  renderForm() {
    const { type, action } = this.props;
    let setClass;

    if (typeof type === 'string') {
      setClass = `${type} mailchimp form`;
    } else {
      setClass = 'mailchimp form';
    }

    return (
      <form className={setClass}
            method="post"
            action={action}
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank">
        <div className="field group">
          <input type="email"
                 id="mce-EMAIL"
                 className="email input required"
                 ref="email"
                 name="EMAIL"
                 placeholder="Email Address" />
          <button type="submit"
                  id="mc-embedded-subscribe"
                  className="primary submit button">
            Subscribe
          </button>
        </div>
        <div id="mce-responses" className="responses">
          <div className="response" id="mce-error-response"></div>
          <div className="response" id="mce-success-response"></div>
        </div>
        <div style={ {position: 'absolute', left: '-5000px' }} aria-hidden="true">
          <input type="text" name="b_6380b6fe11ad3950670069ebd_926f2b9f1a" tabIndex="-1" value="" />
        </div>
      </form>
    )
  }

  render() {
    const { type, figure } = this.props;
    let mailchimp, setClass;

    if (typeof type === 'string') {
      setClass = `${type} mailchimp figure`;
    } else {
      setClass = 'mailchimp figure';
    }

    if (figure) {
      mailchimp = (
        <figure className={setClass}>
          { this.renderHeadline() }
          { this.renderForm() }
          { this.renderMessage() }
        </figure>
      );
    } else {
      mailchimp = this.renderForm();
    }

    return mailchimp;
  }
}

export default Mailchimp;
