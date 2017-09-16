import _ from 'lodash';
import React from 'react';
import Helmet from 'react-helmet';
import SEO from '../containers/seo/';
import Hero from '../containers/hero/';
import Listing from '../containers/listing/';
import CTA from '../containers/cta/';
import Heel from '../containers/heel';
import Mailchimp from '../components/mailchimp';
import SocialLinks from '../components/social_links';
import Counter from '../components/counter/';
import config from '../../data/config';
import pages from '../../data/pages';

let path;
if (process.env.NODE_ENV === `production`) {
  path = config.pathPrefix ? `${config.pathPrefix}${config.blogPostPrefix}` : config.blogPostPrefix;
} else {
  path = config.blogPostPrefix;
}

class UpdatesIndex extends React.Component {
  componentWillMount() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

    var updates = posts.filter((post) => {
      return post.node.frontmatter.type === 'post'
    });

    var page = pages.filter((page) => {
      return page.path === path
    })[0];

    this.page = page;
    this.updates = updates;
  }

  getPageConfig() {
    return this.page;
  }

  getUpdates() {
    return this.updates;
  }

  render() {
    const page = this.getPageConfig();
    const posts = this.getUpdates();

    return (
      <div className={`${page.id} page`}>
        <Helmet title={`${_.capitalize(page.id)} | ${config.siteTitle}`} />
        <SEO postEdges={posts} />
        <Hero figure={page.hero.figure}
              title={page.hero.headline.title}
              caption={page.hero.headline.caption} />
        <Listing type={page.listing.type}
                 figure={page.listing.figure}
                 prefix={page.listing.prefix}
                 button={page.listing.button}
                 headline={page.listing.headline}
                 list={posts} />
        <CTA type={page.cta.type}>
          <Mailchimp figure
                     title={config.subscribeTitle}
                     caption={config.subscribeCaption}
                     action={config.mailchimpAction}
                     disclaimer={config.subscribeDisclaimer} />
          <SocialLinks links={config.userLinks} />
        </CTA>
        <Heel type={page.heel.type}>
          <Counter type={page.heel.type}
                   title={config.countdownTitle}
                   date={config.countdownDate}
                   message={config.counterMessage} />
        </Heel>
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
