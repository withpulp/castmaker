import _ from 'lodash';
import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../containers/hero/';
import Listing from '../containers/listing/';
import CTA from '../containers/cta/';
import Heel from '../containers/heel';
import SEO from '../components/seo/';
import Mailchimp from '../components/mailchimp';
import SocialLinks from '../components/social_links';
import config from '../../data/config';
import pages from '../../data/pages';

class UpdatesIndex extends React.Component {
  render() {
    const { location, data } = this.props;
    const posts = data.allMarkdownRemark.edges;
    const page = pages.filter((page) => { return page.path === location.pathname; })[0];

    const heel = {
      type: 'fluid',
      title: 'Ready To Launch In',
      date: config.countdownDate,
      message: 'Subscribe to our newsletter to receive monthly progress reports about the development of our product.'
    };

    // @TODO: filter out post types in graphQL
    // http://graphql.org/learn/queries/
    let updates = [];
    posts.forEach((post) => {
      if (_.includes(post.node.frontmatter.type, 'post')) {
        updates.push(post);
      }
    });

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
                 list={updates} />
        <CTA type={page.cta.type}>
          <Mailchimp title={config.subscribeTitle}
                     caption={config.subscribeCaption}
                     action={config.mailchimpAction}
                     disclaimer={config.subscribeDisclaimer} />
          <SocialLinks links={config.userLinks} />
        </CTA>
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
