import _ from 'lodash';
import React from 'react';
import Link from 'gatsby-link';
import './index.scss';

class Button extends React.Component {
  renderIcon() {
    const { icon } = this.props;
    let setClass;

    if (icon && typeof icon === 'string') {
      setClass = `${icon} icon`;
    } else {
      setClass = 'icon';
    }

    if (icon) {
      return <i className={setClass}></i>;
    } else {
      return null;
    }
  }

  renderButton() {
    const { type, label, to, action } = this.props;
    let button, setClass;

    if (type && typeof type === 'string') {
      setClass = `${type} button`;
    } else {
      setClass = 'button';
    }

    if (_.includes(type, 'link')) {
      button = <Link className={setClass} to={to}>{this.renderIcon()}{label}</Link>
    } else if (_.includes(type, 'submit')) {
      button = <button type="submit" className={setClass} onClick={action}>{this.renderIcon()}{label}</button>
    } else {
      button = <button type="button" className={setClass} onClick={action}>{this.renderIcon()}{label}</button>
    }

    return button;
  }

  render() {
    const { figure } = this.props;
    let button;

    if (figure) {
      let setClass;

      if (typeof figure === 'string') {
        setClass = `${figure} button figure`;
      } else {
        setClass = 'button figure';
      }

      button = (
        <figure className={setClass}>
          { this.renderButton() }
        </figure>
      );
    } else {
      button = this.renderButton()
    }

    return button;
  }
}

export default Button;
