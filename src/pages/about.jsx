import _ from 'lodash';
import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../containers/hero/';
import Content from '../containers/content';
import CTA from '../containers/cta/';
import Heel from '../containers/heel';
import Mailchimp from '../components/mailchimp';
import SocialLinks from '../components/social_links';
import Counter from '../components/counter/';
import config from '../../data/config';
import pages from '../../data/pages';

let path;
if (process.env.NODE_ENV === `production`) {
  path = config.pathPrefix ? `${config.pathPrefix}/about` : '/about';
} else {
  path = '/about';
}

class AboutIndex extends React.Component {
  componentWillMount() {
    const content = this.props.data.allMarkdownRemark.edges;

    var about = content.filter((item) => {
      return item.node.frontmatter.title === 'About'
    })[0];

    var page = pages.filter((page) => {
      return page.path === path
    })[0];

    this.page = page;
    this.content = about.node;
  }

  getPageConfig() {
    return this.page;
  }

  getPageContent() {
    return this.content;
  }

  render() {
    const page = this.getPageConfig();
    const content = this.getPageContent();

    return (
      <div className={`${page.id} page`}>
        <Helmet title={`${_.capitalize(page.id)} | ${config.siteTitle}`} />
        <Hero figure={page.hero.figure}
              title={page.hero.headline.title}
              caption={page.hero.headline.caption} />
        <Content type={page.content.type}
                 figure={page.content.figure}
                 data={content} />
        <CTA type={page.cta.type}>
          <Mailchimp figure
                     title={config.subscribeTitle}
                     caption={config.subscribeCaption}
                     action={config.mailchimpAction}
                     disclaimer={config.subscribeDisclaimer} />
          <SocialLinks links={config.userLinks} />
        </CTA>
        <Heel type={page.heel.type}>
          <Counter lazy
                   type={page.heel.type}
                   title={config.countupTitle}
                   date={config.countupDate}
                   message={config.counterMessage} />
        </Heel>
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
