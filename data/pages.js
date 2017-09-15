const config = require('./config');

let root;
if (process.env.NODE_ENV === `production`) {
	root = config.pathPrefix ? config.pathPrefix + '/' : '/';
} else {
	root = '/';
}

module.exports = [
	{
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
	},
  {
    id: 'about',
		path: root + 'about',
    hero: {
			figure: true,
			headline: {
				level: 1,
				title: 'What is Castmaker?',
	      caption: true
			}
    },
		content: {
			type: 'markdown',
			figure: true
		},
    cta: {
      type: 'centered'
    },
    heel: {
      type: 'fluid'
    }
	},
  {
    id: 'updates',
		path: root + 'updates',
    hero: {
			figure: true,
			headline: {
				level: 1,
				title: 'Development Updates',
	      caption: 'These are the documents of our product\'s entire life cycle'
			}
    },
    listing: {
      type: 'posts',
			figure: 'posts',
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
