import React from 'react';
import './index.css';

class Countup extends React.Component {
  render() {
    const { figure } = this.props;

    return (
      <figure className={`${figure} countup figure`}>
        countup
      </figure>
    );
  }
}

export default Countup;
