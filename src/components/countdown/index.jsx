import React from 'react';
import './index.css';

class Countdown extends React.Component {
  render() {
    const { date, figure } = this.props;
    console.log(new Date(date));

    return (
      <figure className={`${figure} countdown figure`}>
        {date}
      </figure>
    );
  }
}

export default Countdown;
