import React from 'react';
import Countdown from '../../components/countdown/';
import Countup from '../../components/countup/';
import './index.css';

class Counter extends React.Component {
  renderContent() {
    const { data, lazy } = this.props;
    let figure, type;

    if (data.type === 'fluid') {
      type = 'container'
    } else {
      type = null;
    }

    if (lazy) {
      figure = <Countup data={data} type={type} />
    } else {
      figure = <Countdown data={data} type={type} />
    }

    return figure;
  }

  render() {
    const { type } = this.props.data;

    return (
      <section className={`${type} counter section`}>
        { this.renderContent() }
      </section>
    )
  }
}

export default Counter;
