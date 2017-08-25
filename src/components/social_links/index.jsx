import React from 'react';
import './index.css';

// @TODO: add icons (font awesome)
class SocialLinks extends React.Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map(link => (
      <a className="button"
         key={link.label}
         href={link.url}
         target="_blank">
        {labeled ?
          link.label
        : ''}
      </a>
    ));
  }
  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    } else {
      const { contained } = this.props;
      let figure;

      if (contained) {
        figure = (
          <section className="user links section">
            <h2 className="title">Get In Touch</h2>
            <figure className="user links figure">
              { this.getLinkElements() }
            </figure>
          </section>
        );
      } else {
        figure = (
          <figure className="user links figure">
            { this.getLinkElements() }
          </figure>
        );
      }

      return figure;
    }
  }
}

export default SocialLinks;
