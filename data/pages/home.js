const config = require('../config');
const root = process.env.NODE_ENV === 'production' ? config.pathPrefix ? config.pathPrefix + '/' : '/' : '/';

module.exports = {
  id: 'home',
  path: root,
  hero: {
    type: 'jumbo',
    figure: true,
    image: {
      type: 'logo'
    },
    headline: {
      type: 'centered',
      level: 1,
      title: true,
      caption: true
    }
  },
  cta: {
    type: 'centered'
  },
  listing: {
    type: 'posts',
    figure: true,
    button: {
      type: 'primary link',
      label: 'View All Updates'
    },
    prefix: '/updates',
    headline: {
      level: 1,
      title: 'Latest Update'
    }
  },
  heel: {
    type: 'fluid'
  }
}
