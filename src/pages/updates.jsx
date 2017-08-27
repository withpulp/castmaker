import _ from 'lodash';
import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../containers/hero/';
import Blog from '../containers/blog/';
import Subscribe from '../containers/subscribe/';
import Heel from '../containers/heel';
import SEO from '../components/seo/';
import config from '../../data/config';

class UpdatesIndex extends React.Component {
  render() {
    const { location, data } = this.props;
    const content = data.allMarkdownRemark.edges;

    // @TODO: import from data modules
    const hero = {
      title: 'Development Updates',
      caption: 'These are the documents of our product\'s entire life cycle'
    };
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
        <Subscribe data={subscribe} config={config} />
        <Heel data={heel} />
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
