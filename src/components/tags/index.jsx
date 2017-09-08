import _ from 'lodash';
import React from 'react';
import Link from 'gatsby-link';
import './index.scss';

class Tags extends React.Component {
  render() {
    const { type, figure, tags } = this.props;

    let setClass;
    if (typeof figure === 'string') {
      if (typeof type === 'string') {
        setClass = `${type} tags ${figure} figure`;
      } else {
        setClass = `tags ${figure} figure`;
      }
    } else {
      if (typeof type === 'string') {
        setClass = `${type} tags figure`;
      } else {
        setClass = 'tags figure';
      }
    }

    return (
      <figure className={setClass}>
        {tags && tags.map(tag => (
          <Link className="tag button"
                key={tag}
                to={`/updates/tags/${_.kebabCase(tag)}`}>
            {tag}
          </Link>
        ))}
      </figure>

    );
  }
}

export default Tags;
