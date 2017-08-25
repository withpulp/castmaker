import React from 'react';
import Link from 'gatsby-link';
import Posts from '../../components/posts/';
import './index.css';

class Blog extends React.Component {
  getPosts() {
    const { posts } = this.props;
    const list = [];

    posts.forEach((post) => {
      list.push({
        path: `/posts${post.node.fields.slug}`,
        tags: post.node.frontmatter.tags,
        category: post.node.frontmatter.category,
        title: post.node.frontmatter.title,
        date: post.node.frontmatter.date,
        excerpt: post.node.excerpt,
        timeToRead: post.node.timeToRead,
      });

    });

    return list;
  }

	render() {
    const path = this.props.location.pathname;
    const posts = this.getPosts();

		return (
      <section className="blog section">
        <Posts data={posts} />
        { path === '/' ?
          <Link to="/posts"
                className="button">
            See More Posts
          </Link>
        : null }
      </section>
    );
	}
};

export default Blog;
