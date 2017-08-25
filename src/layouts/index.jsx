import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/config';
import Header from '../containers/header/';
import Footer from '../containers/footer/';
import '../../css/_elements.css';
import './index.css';

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);

    this.handleMenuState = this.handleMenuState.bind(this)
    this.state = {
      menu: ''
    }
  }

  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
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
    } else if (currentPath.includes('posts')) {
      title = 'Article';
    } else if (currentPath.includes('tags/')) {
      const tag = currentPath.replace('tags/', '').replace('/', '').replace('-', ' ');
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.includes('categories/')) {
      const category = currentPath.replace('categories/', '').replace('/', '').replace('-', ' ');
      title = `${capitalize(category)}`;
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
      <main className={`${this.state.menu} main layout`}>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Header location={location} action={this.handleMenuState} />
        <main className="main content">
          {children()}
        </main>
        <Footer location={location} />
      </main>
    );
  }
}
