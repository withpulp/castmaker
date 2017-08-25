import _ from 'lodash';
import React, { Component } from 'react';
import Link from 'gatsby-link';
import './index.css';

class Tags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <figure className="tags figure">
        {tags && tags.map(tag => (
          <Link className="tag button"
                key={tag}
                to={`/posts/tags/${_.kebabCase(tag)}`}>
            {tag}
          </Link>
        ))}
      </figure>

    );
  }
}

export default Tags;
