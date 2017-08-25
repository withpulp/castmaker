import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../containers/hero/';
import Blog from '../containers/blog/';
import config from '../../data/config';

export default class TagTemplate extends React.Component {
  render() {
    const { location } = this.props;
    const tag = this.props.pathContext.tag;
    const hero = {
      title: tag
    };
    const posts = this.props.data.allMarkdownRemark.edges;

    return (
      <div className="tag template">
        <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
        <div className="tag page">
          <Hero data={hero} />
          <Blog posts={posts} location={location} />
        </div>
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
query TagPage($tag: String) {
  allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { tags: { in: [$tag] }} }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
          }
        }
      }
    }
}
`;
