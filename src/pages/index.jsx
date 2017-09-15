import _ from 'lodash';
import React from 'react';
import Helmet from 'react-helmet';
import SEO from '../containers/seo/';
import Hero from '../containers/hero/';
import CTA from '../containers/cta/';
import Listing from '../containers/listing/';
import Heel from '../containers/heel/';
import Image from '../components/image/';
import Headline from '../components/headline/';
import Mailchimp from '../components/mailchimp/';
import SocialLinks from '../components/social_links/';
import Counter from '../components/counter/';
import logo from '!file-loader!../../static/logos/logo-1024.png';
import config from '../../data/config';
import pages from '../../data/pages';

let path;
if (process.env.NODE_ENV === `production`) {
  path = config.pathPrefix ? `${config.pathPrefix}/` : '/';
} else {
  path = '/';
}

class Index extends React.Component {
  componentWillMount() {
    const { location } = this.props;

    var page = pages.filter((page) => {
      if (location) {
        return page.path === location.pathname
      } else {
        return page.path === path
      }
    })[0];

    this.page = page;
  }

  getPageConfig() {
    return this.page;
  }

  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;
    const page = this.getPageConfig();

    // @TODO: filter out post types in graphQL (if possible)
    // if not possible - find a better way to filter this data
    // query currently pulls all data (includes about.md)
    // http://graphql.org/learn/queries/
    let updates = [];
    posts.forEach((post) => {
      if (_.includes(post.node.frontmatter.type, 'post')) {
        updates.push(post);
      }
    });

    return (
      <div className={`${page.id} page`}>
        <Helmet title={`${config.siteTitle} | ${config.siteDescription}`} />
        <SEO postEdges={posts} />
        <Hero type={page.hero.type} figure={page.hero.figure}>
          <Image type={page.hero.image.type}
                 image={logo} />
          <Headline type={page.hero.headline.type}
                    level={page.hero.headline.level}
                    title={page.hero.headline.title}
                    caption={page.hero.headline.caption} />
        </Hero>
        <CTA type={page.cta.type}>
          <Mailchimp figure
                     action={config.mailchimpAction}
                     disclaimer={config.subscribeDisclaimer} />
          <SocialLinks links={config.userLinks} />
        </CTA>
        <Listing type={page.listing.type}
                 figure={page.listing.figure}
                 prefix={page.listing.prefix}
                 button={page.listing.button}
                 headline={page.listing.headline}
                 list={updates} />
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
