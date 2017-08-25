import React from 'react';
import './index.css';

class Post extends React.Component {
  render() {
    const { post } = this.props;

    return (
      <figure className="post figure">
        <article className="article" dangerouslySetInnerHTML={{ __html: post.html }} />
      </figure>
    );
  }
}

export default Post;
