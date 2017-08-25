import _ from 'lodash';
import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../containers/hero/';
import Blog from '../containers/blog/';
import SEO from '../components/seo/';
import config from '../../data/config';

class PostsIndex extends React.Component {
  render() {
    const { location, data } = this.props;
    const content = data.allMarkdownRemark.edges;
    const hero = {
      title: 'Posts',
      caption: 'Read All About It'
    };

    // @TODO: filter out post types in graphQL
    // http://graphql.org/learn/queries/
    let posts = [];
    content.forEach((item) => {
      if (_.includes(item.node.frontmatter.type, 'post')) {
        posts.push(item);
      }
    });

    return (
      <div className="posts page">
        <Helmet title={`Posts | ${config.siteTitle}`} />
        <SEO postEdges={posts} />
        <Hero data={hero} />
        <Blog posts={posts} location={location} />
      </div>
    );
  }
}

export default PostsIndex;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query PostsQuery {
  allMarkdownRemark(
    limit: 2000,
    sort: { fields: [frontmatter___date], order: DESC },
  ) {
    edges {
      node {
        fields {
          slug
        }
        excerpt
        timeToRead
        frontmatter {
          title
          type
          category
          tags
          date
        }
      }
    }
  }
}
`;
