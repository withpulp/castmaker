import React from 'react';
import Headline from '../../components/headline';
import Button from '../../components/button';
import './index.scss';

class CTA extends React.Component {
  renderCTA() {
    const { level, headline, button } = this.props;
    let cta, setLevel;

    if (level) {
      setLevel = level;
    } else {
      setLevel = 2;
    }

    if (headline) {
      cta = <Headline level={setLevel} title={headline.title} caption={headline.caption} button={button} />
    } else {
      if (button) {
        cta = <Button type={button.type} label={button.label} to={button.link} action={button.action} />
      } else {
        cta = null;
      }
    }

    return cta;
  }

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
    let cta;

    if (figure) {
      let setClass;

      if (typeof figure === 'string') {
        setClass = `${figure} cta figure`;
      } else {
        setClass = 'cta figure';
      }

      cta = (
        <section className={type ? `${type} cta section` : `cta section`}>
          <figure className={setClass}>
            { children ?
              this.renderChildren()
            :
              this.renderCTA()
            }
          </figure>
        </section>
      );
    } else {
      cta = (
        <section className={type ? `${type} cta section` : `cta section`}>
          { children ?
            this.renderChildren()
          :
            this.renderCTA()
          }
        </section>
      );
    }

    return cta;
  }
}

export default CTA;
