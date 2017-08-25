import React from 'react';
import './index.css';

class Markdown extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <section className="markdown section">
        <figure className="markdown figure">
          <article className="article" dangerouslySetInnerHTML={{ __html: data.node.html }} />
        </figure>
      </section>
    )
  }
}

export default Markdown;
