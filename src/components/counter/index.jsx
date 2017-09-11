import React from 'react';
import Headline from '../../components/headline/';
import Message from '../../components/message/';
import './index.scss';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.updateTime = this.updateTime.bind(this);

    let lazy;
    if (props.lazy) {
      lazy = true;
    } else {
      lazy = false;
    }

    this.state = {
      lazy: lazy,
      time: new Date(props.date) / 1000
    }
  }

  componentDidMount() {
    this.counting = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.counting);
  }

  updateTime() {
    let lazy = this.state.lazy;

    let time;
    if (lazy) {
      time = this.state.time + 1;
    } else {
      time = this.state.time - 1;
    }

    this.setState({time: time});

    if (this.state.time === 0) {
      this.setState({lazy: true});
    }
  }

  // @TODO: call updateHeadline when state lazy is true
  renderHeadline() {
    const { title, caption } = this.props;

    if (title) {
      return <Headline level={1}
                       title={title}
                       caption={caption} />;
    } else {
      return null;
    }
  }

  renderCounter() {
    const { title, date, message } = this.props;
    const formattedDate = new Date(date);
    const currentDate = new Date();

    let difference;
    if (this.state.lazy) {
      difference = currentDate - formattedDate;
    } else {
      difference = formattedDate - currentDate;
    }

    // @TODO: create a function to handle this
    var days = parseInt(difference / (24 * 3600 * 1000));
    var hours = parseInt(difference / (3600 * 1000) - (days * 24));
    var minutes = parseInt(difference / (60 * 1000) - (days * 24 * 60) - (hours * 60));
    var seconds = parseInt(difference / (1000) - (minutes * 60) - (days * 24 * 60 * 60) - (hours * 60 * 60));

    // @TODO: create component for the count element
    // set pulse state for count component
    // pulse state toggles class whenver the number changes
    return (
      <figcaption className="counter caption">
        <h2 className="days count">
          {days}
          <small className="label">
            days
          </small>
        </h2>
        <h2 className="hours count">
          {hours}
          <small className="label">
            hours
          </small>
        </h2>
        <h2 className="minutes count">
          {minutes}
          <small className="label">
            minutes
          </small>
        </h2>
        <h2 className="seconds count">
          {seconds}
          <small className="label">
            seconds
          </small>
        </h2>
      </figcaption>
    )
  }

  renderMessage() {
    const { message } = this.props;

    if (message) {
      return <Message level={6}
                      message={message} />
    } else {
      return null;
    }
  }

  render() {
    const { type } = this.props;

    let setClass;
    if (typeof type === 'string' && type !== 'fluid') {
      setClass = `${type} counter figure`;
    } else if (type === 'fluid') {
      setClass = 'counter container figure';
    } else {
      setClass = 'counter figure';
    }

    return (
      <figure className={setClass}>
        { this.renderHeadline() }
        { this.renderCounter() }
        { this.renderMessage() }
      </figure>
    );
  }
}

export default Counter;
