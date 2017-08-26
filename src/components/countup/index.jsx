import React from 'react';
import './index.css';

class Countup extends React.Component {
  render() {
    const { date, figure } = this.props;

    return (
      <figure className={`${figure} countup figure`}>
        {date}
      </figure>
    );
  }
}

export default Countup;
