import React from 'react';

class Countup extends React.Component {
  // @TODO: create countup function
  // use date prop to set starting date
  // count up from starting date (day) to current date
  // show count of days from starting date
  constructor(props) {
    super(props);

    this.updateTime = this.updateTime.bind(this);
    this.state = {
      time: new Date(props.date) / 1000
    }
  }

  componentDidMount() {
    this.increment = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.increment);
  }

  updateTime() {
    var newTime = this.state.time + 1;
    this.setState({time: newTime});
  }

  render() {
    const { date, figure } = this.props;
    const formattedDate = new Date(date);
    const currentDate = new Date();
    const difference = currentDate - formattedDate;

    var days = parseInt(difference / (24 * 3600 * 1000));
    var hours = parseInt(difference / (3600 * 1000) - (days * 24));
    var minutes = parseInt(difference / (60 * 1000) - (days * 24 * 60) - (hours * 60));
    var seconds = parseInt(difference / (1000) - (minutes * 60) - (days * 24 * 60 * 60) - (hours * 60 * 60));

    return (
      <figure className={`${figure} countup figure`}>
        <h1 className="title">You've Been Waiting For</h1>
        <figcaption className="countup caption">
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
        <h6 className="message">Subscribe to our newsletter to receive progress reports about the development of this product.</h6>
      </figure>
    );
  }
}

export default Countup;
