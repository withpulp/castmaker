import _ from 'lodash';
import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import SEO from '../containers/seo/';
import Hero from '../containers/hero/';
import Content from '../containers/content/';
import CTA from '../containers/cta/';
import Heel from '../containers/heel/';
import Affixed from '../containers/affixed/';
import Markdown from '../components/markdown/';
import Tags from '../components/tags/';
import Disqus from '../components/disqus/';
import SocialShare from '../components/social_share/';
import ReadNext from '../components/read_next/';
import ReadingTime from '../components/reading_time/';
import Mailchimp from '../components/mailchimp/';
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
          <Content type={template.content.type}>
            <Markdown figure
                      type={template.content.type}
                      data={postNode} />
            <Tags figure
                  type={template.content.type}
                  tags={postNode.frontmatter.tags} />
            <Disqus figure
                    type={template.content.type}
                    post={postNode} />
          </Content>
          <CTA type={template.cta.type}>
            <SocialShare figure={template.cta.figure}
                         type={template.content.type}
                         postPath={pathContext}
                         postNode={postNode} />
            <ReadNext figure={template.cta.type}
                      type={template.content.type}
                      prefix={template.prefix}
                      previous={postNode.frontmatter.previous}
                      next={postNode.frontmatter.next} />
          </CTA>
          <Heel type={template.heel.type}>
            <Mailchimp figure={template.heel.figure}
                       title={config.subscribeTitle}
                       caption={config.subscribeCaption}
                       action={config.mailchimpAction}
                       disclaimer={config.subscribeDisclaimer} />
          </Heel>
          <Affixed type={template.affixed.type}
                   figure={template.affixed.figure}>
            <ReadingTime type={template.content.type}
                         time={postNode.timeToRead} />
          </Affixed>
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
