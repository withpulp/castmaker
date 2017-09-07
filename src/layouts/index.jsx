import _ from 'lodash';
import { css } from 'glamor';
import React from 'react';
import Helmet from 'react-helmet';
import Header from '../containers/header/';
import Footer from '../containers/footer/';
import config from '../../data/config';
// @TODO: find a better alternative for global styles
// using typography or css modules is a good start
import '../../css/_elements.css';

css.global('*', { boxSizing: 'border-box' });
css.global('.section', {
  display: 'block',
  position: 'relative',
  width: '100%',
  maxWidth: '38em',
  height: 'auto',
  margin: '0 auto',
  marginBottom: '4em',
  padding: '1em'
});
css.global('.figure', {
  display: 'block',
  position: 'relative',
  width: '100%',
  maxWidth: '100%',
  height: 'auto',
  margin: '0 auto'
});

const styles = {
  layout: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    margin: '0 auto'
  },
  content: {
    flex: 1,
    zIndex: 1,
    marginBottom: '50vh',
    backgroundColor: '#fff',
    boxShadow: '0 0 0.25em 0 #3b3c3e'
  }
}

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);

    this.handleMenuState = this.handleMenuState.bind(this)
    this.state = {
      menu: ''
    }
  }

  getLocalTitle() {
    const pathPrefix = config.pathPrefix ? config.pathPrefix : '/';
    const currentPath = this.props.location.pathname.replace(pathPrefix, '').replace('/', '');
    let title = '';

    if (currentPath === ('')) {
      title = 'Home';
    } else if (currentPath === ('tags/')) {
      title = 'Tags';
    } else if (currentPath === ('categories/')) {
      title = 'Categories';
    } else if (currentPath === ('about/')) {
      title = 'About';
    } else if (currentPath.includes('updates')) {
      title = 'Updates';
    } else if (currentPath.includes('tags/')) {
      const tag = currentPath.replace('tags/', '').replace('/', '').replace('-', ' ');
      title = `Tagged in ${_.capitalize(tag)}`;
    } else if (currentPath.includes('categories/')) {
      const category = currentPath.replace('categories/', '').replace('/', '').replace('-', ' ');
      title = `${_.capitalize(category)}`;
    }

    return title;
  }

  handleMenuState() {
    if (this.state.menu === ''){
      this.setState({menu: 'navigating'});
    } else {
      this.setState({menu: ''});
    }
  }

  render() {
    const { location, children } = this.props;

    return (
      <main className={`${this.state.menu} main layout`} css={styles.layout}>
        <Helmet>
          <title>{`${config.siteTitle} | ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Header location={location} action={this.handleMenuState} />
        <main className="main content" css={styles.content}>
          { children() }
        </main>
        <Footer location={location} />
      </main>
    );
  }
}
