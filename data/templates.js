const config = require('./config');
const root = process.env.NODE_ENV === 'production' ? config.pathPrefix ? config.pathPrefix + '/' : '/' : '/';

module.exports = [
	{
    id: 'post',
		prefix: '/updates',
    hero: {
      type: 'post',
			figure: true,
			headline: {
				level: 2,
        button: {
          type: 'category link',
          prefix: '/categories/'
        }
			}
    },
    content: {
      type: 'post'
    },
		cta: {
			type: 'fluid',
			figure: 'container'
		},
    heel: {
      type: 'fluid',
			figure: 'container'
    },
		affixed: {
			type: 'fluid',
			figure: 'inline bottom right'
		}
	},
  {
    id: 'category',
    type: 'updates',
		prefix: '/categories/',
    hero: {
			figure: true,
			headline: {
				level: 1
			}
    },
    listing: {
      type: 'posts',
			figure: 'posts',
			button: {
				type: 'primary link',
				label: 'View All Updates'
			},
      prefix: '/updates'
    },
    cta: {
      type: 'centered'
    },
    heel: {
      type: 'fluid'
    }
	},
  {
    id: 'tag',
    type: 'updates',
		prefix: '/tags/',
    hero: {
			figure: true,
			headline: {
				level: 1
			}
    },
    listing: {
      type: 'posts',
			figure: 'posts',
			button: {
				type: 'primary link',
				label: 'View All Updates'
			},
      prefix: '/updates'
    },
    cta: {
      type: 'centered'
    },
    heel: {
      type: 'fluid'
    }
	}
];
