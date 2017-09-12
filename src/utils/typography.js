import Typography from 'typography';

// @TODO: move to module
const MEDIA = {
  MOBILE: '@media only screen and (min-width: 30em)',
  TABLET: '@media only screen and (min-width: 48em)',
  LAPTOP: '@media only screen and (min-width: 62em)',
  DESKTOP: '@media only screen and (min-width: 75em)',
  DESKTOP_L: '@media only screen and (min-width: 100em)',
  DESKTOP_XL: '@media only screen and (min-width: 125em)'
};

const options = {
  googleFonts: [
    {
      name: 'Ubuntu',
      styles: [
        '300',
        '300i',
        '400',
        '400i',
        '500',
        '500i',
        '700',
        '700i'
      ]
    },
    {
      name: 'Montaga',
      styles: [
        '400'
      ]
    }
  ],
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  headerColor: '#3b3c3e',
  bodyColor: '#515254',
  blockMarginBottom: '1em',
  headerFontFamily: ['Ubuntu', 'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Montaga', 'Georgia', 'Times New Roman', 'serif'],
  overrideStyles: ({ adjustFontSizeTo, scale }, options) => {
    return {
      html: {
        width: '100%',
        height: '100%',
        overflowX: 'hidden',
        overflowY: 'auto'
      },
      body: {
        margin: 0,
        padding: 0
      },
      h1: {
        ...scale(.85)
      },
      h2: {
        ...scale(.65)
      },
      h3: {
        ...scale(.55)
      },
      h4: {
        ...scale(.45)
      },
      h5: {
        ...scale(.35)
      },
      h6: {
        ...scale(.25)
      },
      [MEDIA.MOBILE]: {
        h1: {
          ...scale(.95)
        },
        h2: {
          ...scale(.75)
        },
        h3: {
          ...scale(.65)
        },
        h4: {
          ...scale(.55)
        },
        h5: {
          ...scale(.45)
        },
        h6: {
          ...scale(.35)
        },
        body: {
          ...scale(.05)
        }
      },
      [MEDIA.TABLET]: {
        h1: {
          ...scale(1.05)
        },
        h2: {
          ...scale(.85)
        },
        h3: {
          ...scale(.75)
        },
        h4: {
          ...scale(.65)
        },
        h5: {
          ...scale(.55)
        },
        h6: {
          ...scale(.45)
        },
        body: {
          ...scale(.1)
        }
      },
      [MEDIA.LAPTOP]: {
        h1: {
          ...scale(1.25)
        },
        h2: {
          ...scale(.95)
        },
        h3: {
          ...scale(.85)
        },
        h4: {
          ...scale(.75)
        },
        h5: {
          ...scale(.65)
        },
        h6: {
          ...scale(.55)
        },
        body: {
          ...scale(.15)
        }
      },
      [MEDIA.DESKTOP]: {
        h1: {
          ...scale(1.35)
        },
        h2: {
          ...scale(1.05)
        },
        h3: {
          ...scale(.95)
        },
        h4: {
          ...scale(.85)
        },
        h5: {
          ...scale(.75)
        },
        h6: {
          ...scale(.65)
        },
        body: {
          ...scale(.2)
        }
      },
      [MEDIA.DESKTOP_L]: {
        h1: {
          ...scale(1.45)
        },
        h2: {
          ...scale(1.15)
        },
        h3: {
          ...scale(1.05)
        },
        h4: {
          ...scale(.95)
        },
        h5: {
          ...scale(.85)
        },
        h6: {
          ...scale(.75)
        },
        body: {
          ...scale(.25)
        }
      },
      [MEDIA.DESKTOP_XL]: {
        h1: {
          ...scale(1.55)
        },
        h2: {
          ...scale(1.25)
        },
        h3: {
          ...scale(1.15)
        },
        h4: {
          ...scale(1.05)
        },
        h5: {
          ...scale(.95)
        },
        h6: {
          ...scale(.85)
        },
        body: {
          ...scale(.3)
        }
      },
      'h1, h2, h3, h4, h5, h6': {
        position: 'relative',
        lineHeight: 1
      },
      a: {
        position: 'relative',
        color: '#aa5d4e',
        fontSize: 'inerit',
        fontWeight: 'inherit',
        textDecoration: 'none',
        transition: 'color 250ms'
      },
      'a:hover': {
        color: '#b67468',
        textDecoration: 'underline'
      },
      hr: {
        margin: '5em auto',
        width: '10em',
        background: '#d8dce4'
      }
    }
  }
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
  if (typeof document !== 'undefined') {
    const googleFonts = ReactDOM.renderToStaticMarkup(
      React.createFactory(GoogleFont)({ typography })
    )
    const head = document.getElementsByTagName('head')[0]
    head.insertAdjacentHTML('beforeend', googleFonts)
  }
}

module.exports = typography
