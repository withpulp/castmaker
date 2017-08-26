import React from 'react';
import CountdownDate from 'react-countdown-to-future-date';
import './index.css';

// @TODO: update countdown markup and style
// break up days, hours, seconds into individual elements
class Countdown extends React.Component {
  render() {
    const { date, figure } = this.props;

    return (
      <figure className={`${figure} countdown figure`}>
        <h1 className="title">Product Launch In</h1>
        <CountdownDate givenDate={date} />
        <h6 className="message">Subscribe to our newsletter to receive progress reports about the development of this product.</h6>
      </figure>
    );
  }
}

export default Countdown;
