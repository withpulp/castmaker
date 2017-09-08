import React from 'react';

class Markdown extends React.Component {
  render() {
    const { figure, type, data } = this.props;
    let markdown;

    if (figure) {
      markdown = (
        <figure className={type ? `${type} markdown figure` : `markdown figure`}>
          <article className="markdown article"
                   dangerouslySetInnerHTML={{ __html: data.html }} />
        </figure>
      );
    } else {
      markdown = (
        <article className={type ? `${type} markdown article` : `markdown article`}
                 dangerouslySetInnerHTML={{ __html: data.html }} />
      );
    }

    return markdown;
  }
}

export default Markdown;
