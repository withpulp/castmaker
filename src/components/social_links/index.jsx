import React from 'react';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './index.css';

// @TODO: add icons (font awesome)
class SocialLinks extends React.Component {
  getLinkElements() {
    const { config, labeled } = this.props;
    const userLinks = config.userLinks;

    return userLinks.map(link => (
      labeled ?
        <a className="button"
           key={link.label}
           href={link.url}
           target="_blank">
          <i className={`${link.icon} icon`} /> {link.label}
        </a>
      :
        <a className="transparent button"
           key={link.label}
           href={link.url}
           target="_blank">
          <i className={`${link.icon} icon`} />
        </a>
    ));
  }
  render() {
    const { userLinks } = this.props.config;

    if (userLinks) {
      return (
        <figure className="user links figure">
          { this.getLinkElements() }
        </figure>
      );
    } else {
      return null;
    }
  }
}

export default SocialLinks;
