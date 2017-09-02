import React from 'react';
import Headline from '../../components/headline/';
import Markdown from '../../components/markdown/'
import './index.css';

class Content extends React.Component {
  renderChildren() {
    const { children } = this.props;

    if (children) {
      return children;
    } else {
      return null;
    }
  }

  renderHeadline() {
    const { headline } = this.props;

    if (headline) {
      return <Headline figure={headline.figure}
                       level={headline.level}
                       title={headline.title}
                       caption={headline.caption}
                       button={headline.button} />;
    } else {
      return null;
    }
  }

  renderContent() {
    const { type, data } = this.props;

    if (type === 'markdown') {
      return <Markdown data={data} />
    } else {
      return null;
    }
  }

  render() {
    const { type, figure, children } = this.props;
    let content;

    if (figure) {
      let setClass;

      if (typeof figure === 'string') {
        setClass = `${figure} content figure`;
      } else {
        setClass = 'content figure';
      }

      content = (
        <section className={type ? `${type} content section` : `content section`}>
          { children ?
            <figure className={setClass}>
              { this.renderChildren() }
            </figure>
          :
            <figure className={setClass}>
              { this.renderHeadline() }
              { this.renderContent() }
            </figure>
          }
        </section>
      );
    } else {
      if (children) {
        content = (
          <section className={type ? `${type} content section` : `content section`}>
            { this.renderChildren() }
          </section>
        );
      } else {
        content = (
          <section className={type ? `${type} content section` : `content section`}>
            { this.renderHeadline() }
            { this.renderContent() }
          </section>
        );
      }
    }

    return content;
  }
}

export default Content;
