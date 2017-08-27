import React from 'react';
import './index.css';

class Headline extends React.Component {
  render() {
    const { title, caption, button } = this.props;

    return (
      <h1 className="title">
        {title}
        { caption ?
          <small className="sub">
            { caption }
          </small>
        : null }
        { button ?
          <Link className="category link"
                to={`${button.prefix}${_.kebabCase(button.label)}`}>
            {button.label}
          </Link>
        : null }
      </h1>
    );
  }
}

export default Headline;
