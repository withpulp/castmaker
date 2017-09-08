import React from 'react';
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';
import config from '../../../data/config';
import './index.scss';

class SocialShare extends React.Component {
  render() {
    const { figure, type, postNode, postPath, mobile } = this.props;
    const post = postNode.frontmatter;
    const url = config.siteUrl + config.pathPrefix + postPath;
    const {
      FacebookShareButton,
      GooglePlusShareButton,
      LinkedinShareButton,
      TwitterShareButton,
      TelegramShareButton,
      RedditShareButton,
    } = ShareButtons;
    const {
      FacebookShareCount,
      GooglePlusShareCount,
      LinkedinShareCount,
      RedditShareCount,
    } = ShareCounts;
    const FacebookIcon = generateShareIcon('facebook');
    const TwitterIcon = generateShareIcon('twitter');
    const TelegramIcon = generateShareIcon('telegram');
    const GooglePlusIcon = generateShareIcon('google');
    const LinkedinIcon = generateShareIcon('linkedin');
    const RedditIcon = generateShareIcon('reddit');
    const iconSize = mobile ? 36 : 48;
    const filter = count => (count > 0 ? count : '');

    let setClass;
    if (typeof figure === 'string') {
      if (typeof type === 'string') {
        setClass = `${type} social share ${figure} figure`;
      } else {
        setClass = `social share ${figure} figure`;
      }
    } else {
      if (typeof type === 'string') {
        setClass = `${type} social share figure`;
      } else {
        setClass = 'social share figure';
      }
    }

    return (
      <figure className={setClass}>
        <RedditShareButton
          url={url}
          title={post.title}
        >
          <RedditIcon round size={iconSize} />
          <RedditShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </RedditShareCount>
        </RedditShareButton>
        <TwitterShareButton
          url={url}
          title={post.title}
        >
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <GooglePlusShareButton url={url}>
          <GooglePlusIcon round size={iconSize} />
          <GooglePlusShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </GooglePlusShareCount>
        </GooglePlusShareButton>
        <FacebookShareButton
          url={url}
          title={post.title}
          picture={post.cover}
          description={postNode.excerpt}
        >
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </FacebookShareCount>
        </FacebookShareButton>
        <LinkedinShareButton
          url={url}
          title={post.title}
          description={postNode.excerpt}
        >
          <LinkedinIcon round size={iconSize} />
          <LinkedinShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}</LinkedinShareCount>
        </LinkedinShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon round size={iconSize} />
        </TelegramShareButton>
      </figure>
    );
  }
}

export default SocialShare;
