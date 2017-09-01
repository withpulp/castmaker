import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../containers/hero/';
import Listing from '../containers/listing/';
import CTA from '../containers/cta/';
import Heel from '../containers/heel';
import Mailchimp from '../components/mailchimp';
import SocialLinks from '../components/social_links';
import config from '../../data/config';

export default class TagTemplate extends React.Component {
  render() {
    const { location } = this.props;
    const tag = this.props.pathContext.tag;
    const posts = this.props.data.allMarkdownRemark.edges;

    const heel = {
      type: 'fluid',
      title: 'Ready To Launch In',
      date: config.countdownDate,
      message: 'Subscribe to our newsletter to receive monthly progress reports about the development of our product.'
    };

    return (
      <div className="tag template">
        <Helmet title={`Updates tagged as "${tag}" | ${config.siteTitle}`} />
        <div className="tag page">
          <Hero figure
                level={1}
                title={tag} />
          <Listing type="posts"
                   figure="posts"
                   prefix="/updates"
                   button={{
                     type: 'primary link',
                     label: 'View All Updates'
                   }}
                   list={posts} />
          <CTA type="centered">
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
