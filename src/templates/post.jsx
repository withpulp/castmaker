import _ from 'lodash';
import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import SEO from '../components/seo/';
import Hero from '../containers/hero/';
import Article from '../containers/article';
import Affixed from '../containers/affixed';
import config from '../../data/config';

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const location = this.props.location;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = this.props.location.pathname;
    }
    if (!post.id) {
      post.category_id = config.postDefaultCategoryID;
    }
    const hero = {
      type: 'post',
      title: post.title,
      caption: post.date,
      category: post.category
    }

    return (
      <div className="post template">
        <Helmet title={`${post.title} | ${config.siteTitle}`} />
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div className="post page">
          <Hero data={hero} />
          <Article data={postNode} location={location} slug={slug} />
          <Affixed data={postNode} location={location} type="bottom" />
        </div>
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
query BlogPostBySlug($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug }}) {
    html
    timeToRead
    excerpt
    frontmatter {
      title
      date
      type
      category
      tags
      previous
      next
    }
    fields {
      slug
    }
  }
}
`;
