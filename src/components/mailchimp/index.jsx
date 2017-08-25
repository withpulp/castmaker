import React from 'react';
import jQuery from 'jquery';

// @TODO: create or use a react npm package for mailchimp
class Mailchimp extends React.Component {
  componentDidMount() {
    (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);
  }

  render() {
    const { title, message, action, disclaimer } = this.props.data;

    return (
      <figure className="mailchimp figure">
        { title ?
          <h2 className="title">{title}</h2>
        : null }
        { message ?
          <p className="message">{message}</p>
        : null }

        <form className="mailchimp form"
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
                    className="submit button">
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

        { disclaimer ?
          <p className="disclaimer">{disclaimer}</p>
        : null }
      </figure>
    )
  }
}

export default Mailchimp;
