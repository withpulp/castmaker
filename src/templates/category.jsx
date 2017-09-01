import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../containers/hero/';
import Listing from '../containers/listing/';
import CTA from '../containers/cta/';
import Heel from '../containers/heel';
import Mailchimp from '../components/mailchimp';
import SocialLinks from '../components/social_links';
import config from '../../data/config';

// @TODO: config listing with data from data/posts

export default class CategoryTemplate extends React.Component {
  render() {
    const { location } = this.props;
    const category = this.props.pathContext.category;
    const posts = this.props.data.allMarkdownRemark.edges;

    const heel = {
      type: 'fluid',
      title: 'Ready To Launch In',
      date: config.countdownDate,
      message: 'Subscribe to our newsletter to receive monthly progress reports about the development of our product.'
    };

    return (
      <div className="category template">
        <Helmet title={`Updates in category "${category}" | ${config.siteTitle}`} />
        <div className="category page">
          <Hero figure
                level={1}
                title={category} />
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
query CategoryPage($category: String) {
  allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { category: { eq: $category }} }
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
            category
            date
          }
        }
      }
    }
}
`;
