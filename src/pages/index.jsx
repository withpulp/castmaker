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
    const content = data.allMarkdownRemark.edges;
    const hero = {
      type: 'index',
      title: config.siteTitle,
      caption: config.siteDescription
    };
    const mailchimp = {
      action: config.mailchimpAction,
      disclaimer: 'We will send regular updates to your inbox at no cost, you can unsubscribe at any time.'
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
      <div className="index page">
        <Helmet title={`${config.siteTitle} | ${config.siteDescription}`} />
        <SEO postEdges={posts} />
        <Hero data={hero} />
        <Subscribe data={mailchimp} config={config} />
        <Blog posts={posts} location={location} />
        <Counter type="fluid" date={config.countdownDate} />
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
