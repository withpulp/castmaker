import React from 'react';
import Headline from '../../components/headline';
import Button from '../../components/button';
import './index.css';

class Heel extends React.Component {
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

  renderMessage() {
    const { message } = this.props;

    if (message) {
      // @TODO: create message component
      return <p className="message">{message}</p>
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
    let heel;

    if (figure) {
      let setClass;

      if (typeof figure === 'string') {
        setClass = `${figure} heel figure`;
      } else {
        setClass = 'heel figure';
      }

      heel = (
        <section className={type ? `${type} heel section` : `heel section`}>
          { children ?
            <figure className={setClass}>
              { this.renderChildren() }
            </figure>
          :
            <figure className={setClass}>
              { this.renderHeadline() }
              { this.renderMessage() }
              { this.renderButton() }
            </figure>
          }
        </section>
      );
    } else {
      if (children) {
        heel = (
          <section className={type ? `${type} heel section` : `heel section`}>
            { this.renderChildren() }
          </section>
        );
      } else {
        heel = (
          <section className={type ? `${type} heel section` : `heel section`}>
            { this.renderHeadline() }
            { this.renderMessage() }
            { this.renderButton() }
          </section>
        );
      }
    }

    return heel;
  }
}

export default Heel;
