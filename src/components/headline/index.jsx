import _ from 'lodash';
import React from 'react';
import Link from 'gatsby-link';
import config from '../../../data/config';
import './index.scss';

class Headline extends React.Component {
  renderButton() {
    let button;

    if (this.props.button) {
      const { prefix, label } = this.props.button;

      button = (
        <Link className="headline link"
              to={`${prefix}${_.kebabCase(label)}`}>
          { label }
        </Link>
      );
    } else {
      button = null;
    }

    return button;
  }

  renderCaption() {
    let sub;

    if (this.props.caption) {
      const { caption } = this.props;

      if (typeof caption === 'string') {
        sub = (
          <small className="sub">
            { caption }
          </small>
        );
      } else {
        sub = (
          <small className="sub">
            { config.siteDescription }
          </small>
        );
      }
    } else {
      sub = null;
    }

    return sub;
  }

  renderHeadline() {
    const { type, level, title } = this.props;
    let headline, setClass;

    if (type && typeof type === 'string') {
      setClass = `${type} title`;
    } else {
      setClass = 'title';
    }

    if (level) {
      headline = React.createElement(
        `h${level}`, {className: setClass},
          typeof title === 'string' ?
            title
          : config.siteTitle,
          this.renderCaption(),
          this.renderButton()
      )
    } else {
      headline = (
        <p className={setClass}>
          { typeof title === 'string' ?
            title
          : config.siteTitle }
          { this.renderCaption() }
          { this.renderButton() }
        </p>
      );
    }

    return headline;
  }

  render() {
    const { figure } = this.props;
    let headline;

    if (figure) {
      let setClass;

      if (typeof figure === 'string') {
        setClass = `${figure} headline figure`;
      } else {
        setClass = 'headline figure';
      }

      headline = (
        <figure className={setClass}>
          { this.renderHeadline() }
        </figure>
      );
    } else {
      headline = this.renderHeadline()
    }

    return headline;
  }
}

export default Headline;
