import _ from 'lodash';
import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../containers/hero/';
import Markdown from '../containers/markdown';
import Subscribe from '../containers/subscribe/';
import Heel from '../containers/heel';
import config from '../../data/config';

class AboutIndex extends React.Component {
  render() {
    const content = this.props.data.allMarkdownRemark.edges;

    // @TODO: import from data modules
    const hero = {
      title: 'What is Castmaker?',
      caption: config.siteDescription
    };
    const subscribe = {
      title: 'Can you dig it?',
      message: 'If you can, then you ain\'t no sucka! Give us your email so we can send you more information.',
      action: config.mailchimpAction,
      disclaimer: 'We will send regular updates to your inbox at no cost, you can unsubscribe at any time.'
    };
    const heel = {
      type: 'fluid',
      title: 'You\'ve Been Waiting For',
      date: config.countupDate,
      message: 'Subscribe to our newsletter to receive monthly progress reports about the development of our product.'
    };

    // @TODO: get only about page data
    // from content/pages/about.md
    // using graphql schema
    let about;
    content.forEach((item) => {
      if (_.includes(item.node.frontmatter.type, 'page') && item.node.frontmatter.title === 'About') {
        about = item;
      }
    });

    return (
      <div className="about page">
        <Helmet title={`About | ${config.siteTitle}`} />
        <Hero data={hero} />
        <Markdown data={about} />
        <Subscribe data={subscribe} config={config} />
        <Heel data={heel} lazy />
      </div>
    );
  }
}

export default AboutIndex;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
query AboutQuery {
  allMarkdownRemark {
    edges {
      node {
        html
        frontmatter {
          title
          type
        }
        fields {
          slug
        }
      }
    }
  }
}
`;
