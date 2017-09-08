import React from 'react';
import './index.scss';

class Quote extends React.Component {
  renderQuote() {
    const { data } = this.props;

    if (data) {
      return (
        <blockquote className="quote">
          {`"${data.quote}"`}
          <span className="author">- {data.author}</span>
        </blockquote>
      )
    } else {
      return null;
    }
  }

  render() {
    const { type, figure, data } = this.props;
    let quote;

    if (figure) {
      quote = (
        <figure className={type ? `${type} quote figure` : `quote figure`}>
          { this.renderQuote() }
        </figure>
      );
    } else {
      quote = (
        <blockquote className={type ? `${type} quote` : `quote`}>
          {`"${data.quote}"`}
          <span className="author">- {data.author}</span>
        </blockquote>
      );
    }

    return quote;
  }
}

export default Quote;
