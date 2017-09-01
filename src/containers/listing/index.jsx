import React from 'react';
import Link from 'gatsby-link';
import Headline from '../../components/headline';
import List from '../../components/list';
import Button from '../../components/button';
import './index.css';

class Listing extends React.Component {
  getItems() {
    const { type, list, prefix } = this.props;
    let items = [];

    if (type === 'posts') {
      list.forEach((item) => {
        items.push({
          path: `${prefix}${item.node.fields.slug}`,
          tags: item.node.frontmatter.tags,
          category: item.node.frontmatter.category,
          title: item.node.frontmatter.title,
          date: item.node.frontmatter.date,
          excerpt: item.node.excerpt,
          timeToRead: item.node.timeToRead,
        });
      });
    }

    return items;
  }

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

  renderList() {
    const items = this.getItems();
    const { type, figure } = this.props;

    if (items.length !== 0) {
      if (figure) {
        return <List type={type} items={items} />;
      } else {
        return <List figure={figure} type={type} items={items} />;
      }
    } else {
      return null;
    }
  }

  renderButton() {
    const { button, prefix } = this.props;

    if (button) {
      return <Button type={button.type}
                     to={prefix}
                     icon={button.icon}
                     label={button.label} />;
    } else {
      return null;
    }
  }

	render() {
    const { type, figure, children } = this.props;
    let listing;

    if (figure) {
      let setClass;

      if (typeof figure === 'string') {
        setClass = `${figure} listing figure`;
      } else {
        setClass = 'listing figure';
      }

      listing = (
        <section className={type ? `${type} listing section` : `listing section`}>
          { children ?
            <figure className={setClass}>
              { this.renderChildren() }
            </figure>
          :
            <figure className={setClass}>
              { this.renderHeadline() }
              { this.renderList() }
              { this.renderButton() }
            </figure>
          }
        </section>
      );
    } else {
      if (children) {
        listing = (
          <section className={type ? `${type} listing section` : `listing section`}>
            { this.renderChildren() }
          </section>
        );
      } else {
        listing = (
          <section className={type ? `${type} listing section` : `listing section`}>
            { this.renderHeadline() }
            { this.renderList() }
            { this.renderButton() }
          </section>
        );
      }
    }

    return listing;
	}
};

export default Listing;
