import _ from 'lodash';
import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../containers/hero/';
import Subscribe from '../containers/subscribe/';
import Blog from '../containers/blog/';
import Heel from '../containers/heel';
import SEO from '../components/seo/';
import Headline from '../components/headline';
import logo from '!file-loader!../../static/logos/logo-1024.png';
import config from '../../data/config';
import pages from '../../data/pages';

class Index extends React.Component {
  render() {
    const { location, data } = this.props;
    const updates = data.allMarkdownRemark.edges;
    const page = pages.filter((page) => { return page.path === location.pathname; })[0];

    const subscribe = {
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
    updates.forEach((post) => {
      if (_.includes(post.node.frontmatter.type, 'post')) {
        posts.push(post);
      }
    });

    return (
      <div className="index page">
        <Helmet title={`${config.siteTitle} | ${config.siteDescription}`} />
        <SEO postEdges={posts} />
        <Hero type={page.hero.type} figure={page.hero.figure}>
          <img className="logo image" src={logo} />
          <Headline type={page.hero.headline.type}
                    level={page.hero.headline.level}
                    title={page.hero.headline.title}
                    caption={page.hero.headline.caption} />
        </Hero>
        <Subscribe data={subscribe} config={config} />
        <Blog posts={posts} location={location} />
        <Heel data={heel} />
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off"*/
export const dataQuery = graphql`
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
