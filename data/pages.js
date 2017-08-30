const pages = [
	{
    id: 'home',
		path: '/',
    hero: {
      type: 'jumbo',
			figure: true,
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
		path: '/about',
    hero: {
			figure: true,
			headline: {
				level: 1,
				title: 'What is Castmaker?',
	      caption: true
			}
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
		path: '/updates',
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
      prefix: '/updates'
    },
    cta: {
      type: 'centered'
    },
    heel: {
      type: 'fluid'
    }
	},
];

export default pages;
