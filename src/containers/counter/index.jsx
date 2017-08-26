import React from 'react';
import Countdown from '../../components/countdown/';
import Countup from '../../components/countup/';
import './index.css';

class Counter extends React.Component {
  renderContent() {
    const { type, date, lazy } = this.props;
    let content, figure;

    if (type === 'fluid') {
      figure = 'container'
    } else {
      figure = null;
    }

    if (lazy) {
      content = <Countup date={date} figure={figure} />
    } else {
      content = <Countdown date={date} figure={figure} />
    }

    return content;
  }

  render() {
    const { type } = this.props;

    return (
      <section className={`${type} counter section`}>
        { this.renderContent() }
      </section>
    )
  }
}

export default Counter;
