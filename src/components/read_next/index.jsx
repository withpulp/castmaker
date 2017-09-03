import React from 'react';
import Link from 'gatsby-link';
import Headline from '../../components/headline/';
import './index.css';

class ReadNext extends React.Component {
  render() {
    const { figure, type, prefix, previous, next } = this.props;

    let setClass;
    if (typeof figure === 'string') {
      if (typeof type === 'string') {
        setClass = `${type} read next ${figure} figure`;
      } else {
        setClass = `read next ${figure} figure`;
      }
    } else {
      if (typeof type === 'string') {
        setClass = `${type} read next figure`;
      } else {
        setClass = 'read next figure';
      }
    }

    // @TODO: use headline component
    // need to configure it to place sub above title
    return (
      <figure className={setClass}>
        <Link className="link previous"
              to={`/updates/${previous}`}>
          <h4 className="title">
            <small className="sub">Read Previous</small>
            {previous.split('-').join(' ')}
          </h4>
        </Link>
        <Link className="link next"
              to={`/updates/${next}`}>
          <h4 className="title">
            <small className="sub">Read Next</small>
            {next.split('-').join(' ')}
          </h4>
        </Link>
      </figure>
    );
  }
}

export default ReadNext;
