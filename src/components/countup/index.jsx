import React from 'react';
import './index.css';

class Countup extends React.Component {
  // @TODO: create countup function
  // use date prop to set starting date
  // count up from starting date (day) to current date
  // show count of days from starting date
  render() {
    const { date, figure } = this.props;

    return (
      <figure className={`${figure} countup figure`}>
        <h1 className="title">Development Started</h1>
        <h1 className="date">{date}</h1>
        <h6 className="message">Subscribe to our newsletter to receive progress reports about the development of this product.</h6>
      </figure>
    );
  }
}

export default Countup;
