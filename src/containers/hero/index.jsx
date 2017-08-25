import _ from 'lodash';
import React from 'react';
import Link from 'gatsby-link';
import logo from '!file-loader!../../../static/logos/logo-1024.png';
import './index.css';

class Hero extends React.Component {
  renderFigure() {
    const { type, title, caption, category } = this.props.data;

    let figure;

    if (type === 'index') {
      figure = (
        <figure className="index hero figure">
          <img className="logo image" src={logo} />
          <h1 className="title">
            { title }
            { caption ?
              <small className="sub">
                { caption }
              </small>
            : null }
          </h1>
        </figure>
      );
    } else if (type === 'post') {
      figure = (
        <figure className="post hero figure">
          <h2 className="title">
            { title }
            { caption ?
              <small className="sub">
                { caption }
              </small>
            : null }
            { category ?
              <Link className="category link"
                    to={`/updates/categories/${_.kebabCase(category)}`}>
                {category}
              </Link>
            : null }
          </h2>
        </figure>
      );
    } else {
      figure = (
        <figure className="hero figure">
          <h1 className="title">
            { title }
            { caption ?
              <small className="sub">
                { caption }
              </small>
            : null }
          </h1>
        </figure>
      );
    }

    return figure;
  }

  render() {
    const { type } = this.props.data;

    return (
      <section className={ type ? `${type} hero section` : `hero section`}>
        { this.renderFigure() }
      </section>
    );
  }
}

export default Hero;
