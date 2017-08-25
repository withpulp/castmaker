import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../containers/hero/';
import Blog from '../containers/blog/';
import config from '../../data/config';

export default class CategoryTemplate extends React.Component {
  render() {
    const { location } = this.props;
    const category = this.props.pathContext.category;
    const hero = {
      title: category
    };
    const posts = this.props.data.allMarkdownRemark.edges;

    return (
      <div className="category template">
        <Helmet title={`Posts in category "${category}" | ${config.siteTitle}`} />
        <div className="category page">
          <Hero data={hero} />
          <Blog posts={posts} location={location} />
        </div>
      </div>

    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
query CategoryPage($category: String) {
  allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { category: { eq: $category }} }
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
            category
            date
          }
        }
      }
    }
}
`;
