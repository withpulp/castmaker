import _ from 'lodash';
import React from 'react';
import './index.css';

class Quotes extends React.Component {
  render() {
    const { data } = this.props;
    const random = _.sample(data);

    return (
      <figure className="quotes figure">
        <blockquote className="quote">
          {`"${random.quote}"`}
          <span className="author">- {random.author}</span>
        </blockquote>
      </figure>
    );
  }
}

export default Quotes;
