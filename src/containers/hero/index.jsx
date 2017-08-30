import React from 'react';
import Link from 'gatsby-link';
import Headline from '../../components/headline';
import config from '../../../data/config';
import './index.css';

class Hero extends React.Component {
  renderHeadline() {
    const { title, caption } = this.props;
    let headline;

    if (title) {
      headline = <Headline level={1} title={title} caption={caption} />
    } else {
      headline = <Headline level={1} title={config.siteTitle} caption={config.siteDescription} />
    }

    return headline;
  }

  renderChildren() {
    const { children } = this.props;

    if (children) {
      return children;
    } else {
      return null;
    }
  }

  // renderFigure() {
  //   const { type, title, caption, category } = this.props.data;
  //
  //   let figure;
  //
  //   if (type === 'index') {
  //     figure = (
  //       <figure className="index hero figure">
  //         <img className="logo image" src={logo} />
  //         <h1 className="title">
  //           { title }
  //           { caption ?
  //             <small className="sub">
  //               { caption }
  //             </small>
  //           : null }
  //         </h1>
  //       </figure>
  //     );
  //   } else if (type === 'post') {
  //     figure = (
  //       <figure className="post hero figure">
  //         <h2 className="title">
  //           { title }
  //           { caption ?
  //             <small className="sub">
  //               { caption }
  //             </small>
  //           : null }
  //           { category ?
  //             <Link className="category link"
  //                   to={`/updates/categories/${_.kebabCase(category)}`}>
  //               {category}
  //             </Link>
  //           : null }
  //         </h2>
  //       </figure>
  //     );
  //   } else {
  //     figure = (
  //       <figure className="hero figure">
  //         <h1 className="title">
  //           { title }
  //           { caption ?
  //             <small className="sub">
  //               { caption }
  //             </small>
  //           : null }
  //         </h1>
  //       </figure>
  //     );
  //   }
  //
  //   return figure;
  // }

  render() {
    const { type, figure, children } = this.props;
    let hero;

    if (figure) {
      let setClass;

      if (typeof figure === 'string') {
        setClass = `${figure} hero figure`;
      } else {
        setClass = 'hero figure';
      }

      hero = (
        <section className={type ? `${type} hero section` : `hero section`}>
          <figure className={setClass}>
            { children ?
              this.renderChildren()
            :
              this.renderHeadline()
            }
          </figure>
        </section>
      );
    } else {
      hero = (
        <section className={type ? `${type} hero section` : `hero section`}>
          { children ?
            this.renderChildren()
          :
            this.renderHeadline()
          }
        </section>
      );
    }

    return hero;
  }
}

export default Hero;
