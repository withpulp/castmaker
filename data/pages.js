const pages = [
	{
    id: 'index',
		path: '/',
    hero: {
      type: 'jumbo',
      image: true,
      title: true,
      caption: true
    },
    cta: {
      type: 'centered'
    },
    listing: {
      type: 'posts',
      prefix: '/updates'
    },
    heel: {
      type: 'fluid'
    }
	},
  {
    id: 'about',
		path: '/about',
    hero: {
      title: 'What is Castmaker?',
      caption: true
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
      title: 'What is Castmaker?',
      caption: true
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
