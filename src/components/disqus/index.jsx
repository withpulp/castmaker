import React, { Component } from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import config from '../../../data/config';
import './index.css';

class Disqus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: [],
    };
    this.notifyAboutComment = this.notifyAboutComment.bind(this);
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this);
  }

  onSnackbarDismiss() {
    const [, ...toasts] = this.state.toasts;
    this.setState({ toasts });
  }
  notifyAboutComment() {
    const toasts = this.state.toasts.slice();
    toasts.push({ text: 'New comment available!' });
    this.setState({ toasts });
  }
  render() {
    const { post } = this.props;
    const title = post.frontmatter.title;
    const categoryId = post.frontmatter.category_id;
    const url = config.siteUrl + config.pathPrefix + post.fields.slug;
    if (!config.disqusShortname) {
      return null;
    }
    return (
      <figure className="comments figure">
        <ReactDisqusComments className="disqus"
                             shortname={config.disqusShortname}
                             identifier={title}
                             title={title}
                             url={url}
                             category_id={categoryId}
                             onNewComment={this.notifyAboutComment} />
      </figure>
    );
  }
}

export default Disqus;
