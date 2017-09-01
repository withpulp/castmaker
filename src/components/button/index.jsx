import _ from 'lodash';
import React from 'react';
import Link from 'gatsby-link';
import './index.css';

class Button extends React.Component {
  // @TODO: add icon
  renderButton() {
    const { type, icon, label, to, action } = this.props;
    let button, setClass;

    if (type && typeof type === 'string') {
      setClass = `${type} button`;
    } else {
      setClass = 'button';
    }

    if (_.includes(type, 'link')) {
      button = <Link className={setClass} to={to}>{label}</Link>
    } else if (_.includes(type, 'submit')) {
      button = <button type="submit" className={setClass} action={action}>{label}</button>
    } else {
      button = <button type="button" className={setClass} action={action}>{label}</button>
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
