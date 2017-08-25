import React from 'react';
import Link from 'gatsby-link';
import './index.css';

class Posts extends React.Component {
  render() {
    const posts = this.props.data;

    return (
      <figure className="posts figure">
        <ul className="unstyled list">
          {posts.map(post => (
            <li className="item"
                key={post.path}>
              <Link className="link"
                    to={post.path}>
                <h2 className="title">
                  {post.title}
                  <small className="sub meta">
                    {post.date}
                  </small>
                </h2>
                <p className="excerpt">
                  {post.excerpt}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </figure>
    );
  }
}

export default Posts;
