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
        path: `/updates${post.node.fields.slug}`,
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
    const posts = this.getPosts();
    const path = this.props.location.pathname;

		return (
      <section className="blog section">
        { path === '/' ?
          <h1 className="title">
            Latest Update
          </h1>
        : null }
        <Posts data={posts} />
        { path !== '/updates' ?
          <Link to="/updates" className="primary button">
            View All Updates
          </Link>
        : null }
      </section>
    );
	}
};

export default Blog;
