import React from 'react';
import Counter from '../../components/counter/';
import './index.css';

class Heel extends React.Component {
  renderContent() {
    const { data, lazy } = this.props;
    let figure, type;

    if (data.type === 'fluid') {
      type = 'container'
    } else {
      type = null;
    }

    if (lazy) {
      figure = <Counter data={data} type={type} lazy />
    } else {
      figure = <Counter data={data} type={type} />
    }

    return figure;
  }

  render() {
    const { type } = this.props.data;

    return (
      <section className={`${type} heel section`}>
        { this.renderContent() }
      </section>
    )
  }
}

export default Heel;
