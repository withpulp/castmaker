import _ from 'lodash';
import React from 'react';
import Link from 'gatsby-link';
import './index.scss';

class List extends React.Component {
  // @TODO: use headline component to render headline
  renderList() {
    const { type, items } = this.props;
    let list;

    if (_.includes(type, 'posts')) {
      list = (
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
      list = (
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

    return list;
  }

  render() {
    const { figure } = this.props;
    let list;

    if (figure) {
      let setClass;

      if (typeof figure === 'string') {
        setClass = `${figure} list figure`;
      } else {
        setClass = 'list figure';
      }

      list = (
        <figure className={setClass}>
          { this.renderList() }
        </figure>
      );
    } else {
      list = this.renderList();
    }

    return list;
  }
}

export default List;
