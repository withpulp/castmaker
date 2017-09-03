import React from 'react';
import './index.css';

class Message extends React.Component {
  renderMessage() {
    const { type, level, message } = this.props;
    let setClass;

    if (type && typeof type === 'string') {
      setClass = `${type} message`;
    } else {
      setClass = 'message';
    }

    if (message) {
      if (level) {
        return React.createElement(`h${level}`, {className: setClass}, message);
      } else {
        return <p className={setClass}>{message}</p>;
      }
    } else {
      return null;
    }
  }

  render() {
    const { type, figure } = this.props;
    let message;

    if (figure) {
      message = (
        <figure className={type ? `${type} message figure` : `message figure`}>
          { this.renderMessage() }
        </figure>
      );
    } else {
      message = this.renderMessage();
    }

    return message;
  }
}

export default Message;
