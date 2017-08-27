import _ from 'lodash';
import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../containers/hero/';
import Subscribe from '../containers/subscribe/';
import Blog from '../containers/blog/';
import Counter from '../containers/counter';
import SEO from '../components/seo/';
import config from '../../data/config';

class Index extends React.Component {
  render() {
    const { location, data } = this.props;
    const updates = data.allMarkdownRemark.edges;

    // @TODO: import from content/data/pages.js
    const hero = {
      type: 'index',
      title: config.siteTitle,
      caption: config.siteDescription
    };
    const subscribe = {
      action: config.mailchimpAction,
      disclaimer: 'We will send regular updates to your inbox at no cost, you can unsubscribe at any time.'
    };
    const counter = {
      type: 'fluid',
      title: 'Ready To Launch In',
      date: config.countdownDate,
      message: 'Subscribe to our newsletter to receive monthly progress reports about the development of our product.'
    };

    // @TODO: filter out post types in graphQL
    // http://graphql.org/learn/queries/
    let posts = [];
    updates.forEach((post) => {
      if (_.includes(post.node.frontmatter.type, 'post')) {
        posts.push(post);
      }
    });

    return (
      <div className="index page">
        <Helmet title={`${config.siteTitle} | ${config.siteDescription}`} />
        <SEO postEdges={posts} />
        <Hero data={hero} />
        <Subscribe data={subscribe} config={config} />
        <Blog posts={posts} location={location} />
        <Counter data={counter} />
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
  allMarkdownRemark(
    limit: 2,
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
