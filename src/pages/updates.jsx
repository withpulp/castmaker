import _ from 'lodash';
import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../containers/hero/';
import Blog from '../containers/blog/';
import SEO from '../components/seo/';
import config from '../../data/config';

class UpdatesIndex extends React.Component {
  render() {
    const { location, data } = this.props;
    const content = data.allMarkdownRemark.edges;
    const hero = {
      title: 'Development Updates',
      caption: 'These are the documents of our product\'s entire life cycle'
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
      <div className="updates page">
        <Helmet title={`Posts | ${config.siteTitle}`} />
        <SEO postEdges={posts} />
        <Hero data={hero} />
        <Blog posts={posts} location={location} />
      </div>
    );
  }
}

export default UpdatesIndex;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query UpdatesQuery {
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
