import React from 'react';
import './index.css';

class ReadingTime extends React.Component {
  render() {
    const { type, figure, time } = this.props;

    let setClass;
    if (typeof figure === 'string') {
      if (typeof type === 'string') {
        setClass = `${type} reading time ${figure} figure`;
      } else {
        setClass = `reading time ${figure} figure`;
      }
    } else {
      if (typeof type === 'string') {
        setClass = `${type} reading time figure`;
      } else {
        setClass = 'reading time figure';
      }
    }

    if (figure) {
      return (
        <figure className={setClass}>
          <p className="caption">
            <small className="label">Reading Time</small>
            { time } min
          </p>
        </figure>
      );
    } else {
      return (
        <p className={type ? `${type} reading time caption` : 'reading time caption'}>
          <small className="label">Reading Time</small>
          { time } min
        </p>
      );
    }
  }
}

export default ReadingTime;
