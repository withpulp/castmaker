import React from 'react';
import './index.css';

class Affixed extends React.Component {
  renderChildren() {
    const { children } = this.props;

    if (children) {
      return children;
    } else {
      return null;
    }
  }

  render() {
    const { type, figure, children } = this.props;
    let affixed;

    if (figure) {
      let setClass;

      if (typeof figure === 'string') {
        setClass = `${figure} affixed figure`;
      } else {
        setClass = 'affixed figure';
      }

      affixed = (
        <section className={type ? `${type} affixed section` : `affixed section`}>
          { children ?
            <figure className={setClass}>
              { this.renderChildren() }
            </figure>
          : null }
        </section>
      );
    } else {
      if (children) {
        affixed = (
          <section className={type ? `${type} affixed section` : `affixed section`}>
            { this.renderChildren() }
          </section>
        );
      } else {
        affixed = null;
      }
    }

    return affixed;
  }
}

export default Affixed;
