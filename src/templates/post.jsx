import _ from 'lodash';
import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import SEO from '../components/seo/';
import Hero from '../containers/hero/';
import Article from '../containers/article';
import Affixed from '../containers/affixed';
import Heel from '../containers/heel';
import config from '../../data/config';
import templates from '../../data/templates';

export default class PostTemplate extends React.Component {
  render() {
    const { pathContext, location, data } = this.props;
    const template = templates.filter((template) => { return template.id === 'post'; })[0];
    const postNode = data.markdownRemark;

    let post = postNode.frontmatter;
    if (!post.id) {
      post.id = pathContext;
      post.category_id = config.postDefaultCategoryID;
    }

    let button;
    if (post.category) {
      button = {
        type: template.hero.headline.button.type,
        prefix: `${config.blogPostPrefix}${template.hero.headline.button.prefix}`,
        label: post.category
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
        <Helmet title={`${post.title} | ${config.siteTitle}`} />
        <SEO postPath={pathContext} postNode={postNode} postSEO />
        <div className={`${template.id} page`}>
          <Hero figure
                type={template.hero.type}
                level={template.hero.headline.level}
                title={post.title}
                caption={post.date}
                button={button} />
          <Article data={postNode} location={location} slug={pathContext} />
          <Affixed data={postNode} location={location} type="bottom" />
          <Heel data={heel} />
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
