import _ from 'lodash';
import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../containers/hero/';
import Markdown from '../containers/markdown';
import SocialLinks from '../components/social_links';
import config from '../../data/config';

class AboutIndex extends React.Component {
  render() {
    const content = this.props.data.allMarkdownRemark.edges;
    const hero = {
      title: 'What is Castmaker?',
      caption: config.siteDescription
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
        <SocialLinks config={config} contained labeled />
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
