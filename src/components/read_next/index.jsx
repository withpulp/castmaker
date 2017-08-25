import React from 'react';
import Link from 'gatsby-link';
import './index.css';

class ReadNext extends React.Component {
  render() {
    const { previous, next } = this.props;

    // @TODO: add posts into link href from current url or prop

    return (
      <figure className="read next figure">
        <Link className="link previous"
              to={`/posts/${previous}`}>
          <small className="label">Read Previous</small> {previous.split('-').join(' ')}
        </Link>
        <Link className="link next"
              to={`/posts/${next}`}>
          <small className="label">Read Next</small> {next.split('-').join(' ')}
        </Link>
      </figure>
    );
  }
}

export default ReadNext;
