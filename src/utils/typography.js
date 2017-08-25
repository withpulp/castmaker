import Typography from 'typography';

const MEDIA = {
  MOBILE: '@media only screen and (min-width: 30em)',
  TABLET: '@media only screen and (min-width: 48em)',
  LAPTOP: '@media only screen and (min-width: 62em)',
  DISPLAY: '@media only screen and (min-width: 75em)',
  DISPLAY_L: '@media only screen and (min-width: 100em)',
  DISPLAY_XL: '@media only screen and (min-width: 125em)'
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
  overrideStyles: () => {
    return {
      html: {
        overflowX: 'hidden',
        overflowY: 'auto'
      },
      'h1, h2, h3, h4, h5, h6': {
        position: 'relative',
        marginBottom: '1em',
        lineHeight: 1
      },
      a: {
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
