import React from 'react';
import Link from 'gatsby-link';
import './index.css';

class ReadingTime extends React.Component {
  render() {
    const { time } = this.props;

    return (
      <figure className="reading time figure">
        <p className="caption">
          <small className="label">Reading Time</small>
          { time } min
        </p>
      </figure>
    );
  }
}

export default ReadingTime;
