import React from 'react';
import Post from '../../components/post/';
import Tags from '../../components/tags/';
import Disqus from '../../components/disqus/';
import SocialShare from '../../components/social_share/';
import ReadingTime from '../../components/reading_time/';
import config from '../../../data/config';
import './index.css';

class Article extends React.Component {
	render() {
    const post = this.props.data;
		const tags = post.frontmatter.tags;
    const slug = this.props.slug;
    if (!post.id) {
      post.id = this.props.location.pathname;
    }
    if (!post.id) {
      post.category_id = config.postDefaultCategoryID;
    }

		return (
      <section className="article section">
        <Post post={post} />
        <Tags tags={tags} />
        <Disqus post={post} />
        <SocialShare postPath={slug} postNode={post} />
				<ReadingTime time={post.timeToRead} />
      </section>
    );
	}
};

export default Article;
