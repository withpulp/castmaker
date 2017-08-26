import React from 'react';
import './index.css';

class Countdown extends React.Component {
  render() {
    const { figure } = this.props;

    return (
      <figure className={`${figure} countdown figure`}>
        countdown
      </figure>
    );
  }
}

export default Countdown;
