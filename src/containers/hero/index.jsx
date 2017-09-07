import React from 'react';
import Link from 'gatsby-link';
import Headline from '../../components/headline';
import config from '../../../data/config';
import './index.css';

class Hero extends React.Component {
  renderHeadline() {
    const { level, title, caption, button } = this.props;
    let headline, setLevel;

    if (level) {
      setLevel = level;
    } else {
      setLevel = 1;
    }

    if (title) {
      headline = <Headline level={setLevel} title={title} caption={caption} button={button} />
    } else {
      headline = <Headline level={setLevel} title={config.siteTitle} caption={config.siteDescription} />
    }

    return headline;
  }

  renderChildren() {
    const { children } = this.props;

    if (children) {
      return children;
    } else {
      return null;
    }
  }

  render() {
    const { type, figure, image, children } = this.props;
    let hero, setImage;

    if (image) {
      setImage = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover'
      };
    } else {
      setImage = null;
    }

    if (figure) {
      let setClass;

      if (typeof figure === 'string') {
        setClass = `${figure} hero figure`;
      } else {
        setClass = 'hero figure';
      }

      hero = (
        <section className={type ? `${type} hero section` : `hero section`}
                 style={setImage}>
          <figure className={setClass}>
            { children ?
              this.renderChildren()
            :
              this.renderHeadline()
            }
          </figure>
        </section>
      );
    } else {
      hero = (
        <section className={type ? `${type} hero section` : `hero section`}
                 style={setImage}>
          { children ?
            this.renderChildren()
          :
            this.renderHeadline()
          }
        </section>
      );
    }

    return hero;
  }
}

export default Hero;
