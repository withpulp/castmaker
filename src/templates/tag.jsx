import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../containers/hero/';
import Blog from '../containers/blog/';
import Subscribe from '../containers/subscribe/';
import Heel from '../containers/heel';
import config from '../../data/config';

export default class TagTemplate extends React.Component {
  render() {
    const { location } = this.props;
    const tag = this.props.pathContext.tag;
    const posts = this.props.data.allMarkdownRemark.edges;

    const subscribe = {
      title: 'Can you dig it?',
      message: 'If you can, then you ain\'t no sucka! Give us your email so we can send you more information.',
      action: config.mailchimpAction,
      disclaimer: 'We will send regular updates to your inbox at no cost, you can unsubscribe at any time.'
    };
    const heel = {
      type: 'fluid',
      title: 'Ready To Launch In',
      date: config.countdownDate,
      message: 'Subscribe to our newsletter to receive monthly progress reports about the development of our product.'
    };

    return (
      <div className="tag template">
        <Helmet title={`Updates tagged as "${tag}" | ${config.siteTitle}`} />
        <div className="tag page">
          <Hero figure
                level={1}
                title={tag} />
          <Blog posts={posts} location={location} />
          <Subscribe data={subscribe} config={config} />
          <Heel data={heel} />
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
