import _ from 'lodash';
import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../containers/hero/';
import Listing from '../containers/listing/';
import CTA from '../containers/cta/';
import Heel from '../containers/heel';
import Mailchimp from '../components/mailchimp';
import SocialLinks from '../components/social_links';
import config from '../../data/config';
import templates from '../../data/templates';

export default class TagTemplate extends React.Component {
  render() {
    const { data, pathContext, location } = this.props;
    const template = templates.filter((template) => { return template.id === 'tag'; })[0];
    const tag = pathContext.tag;
    const posts = data.allMarkdownRemark.edges;

    let title;
    if (template.hero.headline.title) {
      title = template.hero.headline.title;
    } else {
      title = tag;
    }

    let button;
    if (template.listing.button) {
      button = {
        type: template.listing.button.type,
        label: template.listing.button.label
      }
    } else {
      button = false;
    }

    const heel = {
      type: 'fluid',
      title: 'Ready To Launch In',
      date: config.countdownDate,
      message: 'Subscribe to our newsletter to receive monthly progress reports about the development of our product.'
    };

    return (
      <div className={`${template.id} template`}>
        <Helmet title={`${_.capitalize(template.type)} tagged as "${tag}" | ${config.siteTitle}`} />
        <div className={`${template.id} page`}>
          <Hero figure={template.hero.figure}
                level={template.hero.headline.level}
                title={title} />
          <Listing type={template.listing.type}
                   figure={template.listing.figure}
                   prefix={template.listing.prefix}
                   button={button}
                   list={posts} />
          <CTA type={template.cta.type}>
            <Mailchimp title={config.subscribeTitle}
                       caption={config.subscribeCaption}
                       action={config.mailchimpAction}
                       disclaimer={config.subscribeDisclaimer} />
            <SocialLinks links={config.userLinks} />
          </CTA>
          <Heel data={heel} />
        </div>
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
query TagPage($tag: String) {
  allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { tags: { in: [$tag] }} }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
          }
        }
      }
    }
}
`;
