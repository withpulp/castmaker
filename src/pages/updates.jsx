import _ from 'lodash';
import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../containers/hero/';
import Blog from '../containers/blog/';
import Subscribe from '../containers/subscribe/';
import Heel from '../containers/heel';
import SEO from '../components/seo/';
import config from '../../data/config';
import pages from '../../data/pages';

class UpdatesIndex extends React.Component {
  render() {
    const { location, data } = this.props;
    const content = data.allMarkdownRemark.edges;
    const page = pages.filter((page) => { return page.path === location.pathname; })[0];

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
        <Helmet title={`Updates | ${config.siteTitle}`} />
        <SEO postEdges={posts} />
        <Hero figure={page.hero.figure}
              title={page.hero.headline.title}
              caption={page.hero.headline.caption} />
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
