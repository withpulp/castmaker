import React from 'react';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './index.css';

// @TODO: GA event tracking for outbound links
// use button component
class SocialLinks extends React.Component {
  getLinkElements() {
    const { links, labeled } = this.props;

    return links.map(link => (
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
    const { links } = this.props;

    if (links) {
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
