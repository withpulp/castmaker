import React from 'react';

class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.updateTime = this.updateTime.bind(this);
    this.state = {
      time: new Date(props.data.date) / 1000
    }
  }

  componentDidMount() {
    this.decrement = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.decrement);
  }

  updateTime() {
    var newTime = this.state.time - 1;
    this.setState({time: newTime});

    if (this.state.time === 0) {
      clearInterval(this.decrement);
      // @TODO: replace/hide counter when time reaches zero
    }
  }

  render() {
    const { data, type } = this.props;
    const formattedDate = new Date(data.date);
    const currentDate = new Date();
    const difference = formattedDate - currentDate;

    var days = parseInt(difference / (24 * 3600 * 1000));
    var hours = parseInt(difference / (3600 * 1000) - (days * 24));
    var minutes = parseInt(difference / (60 * 1000) - (days * 24 * 60) - (hours * 60));
    var seconds = parseInt(difference / (1000) - (minutes * 60) - (days * 24 * 60 * 60) - (hours * 60 * 60));

    return (
      <figure className={`${type} countdown figure`}>
        { data.title ?
          <h1 className="title">{data.title}</h1>
        : null }
        <figcaption className="countdown caption">
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
        { data.message ?
          <h6 className="message">{data.message}</h6>
        : null }
      </figure>
    );
  }
}

export default Countdown;
