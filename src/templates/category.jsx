import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../containers/hero/';
import Blog from '../containers/blog/';
import Subscribe from '../containers/subscribe/';
import Counter from '../containers/counter';
import config from '../../data/config';

export default class CategoryTemplate extends React.Component {
  render() {
    const { location } = this.props;
    const category = this.props.pathContext.category;
    const posts = this.props.data.allMarkdownRemark.edges;

    // @TODO: import from data modules
    const hero = {
      title: category
    };
    const subscribe = {
      title: 'Can you dig it?',
      message: 'If you can, then you ain\'t no sucka! Give us your email so we can send you more information.',
      action: config.mailchimpAction,
      disclaimer: 'We will send regular updates to your inbox at no cost, you can unsubscribe at any time.'
    };
    const counter = {
      type: 'fluid',
      title: 'Ready To Launch In',
      date: config.countdownDate,
      message: 'Subscribe to our newsletter to receive monthly progress reports about the development of our product.'
    };

    return (
      <div className="category template">
        <Helmet title={`Posts in category "${category}" | ${config.siteTitle}`} />
        <div className="category page">
          <Hero data={hero} />
          <Blog posts={posts} location={location} />
          <Subscribe data={subscribe} config={config} />
          <Counter data={counter} />
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
