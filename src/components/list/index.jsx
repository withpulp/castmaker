import _ from 'lodash';
import React from 'react';
import Link from 'gatsby-link';
import './index.scss';

class List extends React.Component {
  // @TODO: use headline component to render headline
  renderList() {
    const { type, items } = this.props;

    if (type.includes('posts')) {
      return (
        <ul className={type ? `${type} list` : `list`}>
          {items.map(item => (
            <li className="item"
                key={item.path}>
              <Link className="link"
                    to={item.path}>
                <h4 className="title">
                  {item.title}
                  <small className="sub meta">
                    {item.date}
                  </small>
                </h4>
                <p className="excerpt">
                  {item.excerpt}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <ul className={type ? `${type} list` : `list`}>
          {items.map(item => (
            <li className="item"
                key={item.id}>
              {item.title}
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    const { figure } = this.props;

    if (figure) {
      let setClass;

      if (typeof figure === 'string') {
        setClass = `${figure} list figure`;
      } else {
        setClass = 'list figure';
      }

      return (
        <figure className={setClass}>
          { this.renderList() }
        </figure>
      );
    } else {
      return this.renderList();
    }
  }
}

export default List;
