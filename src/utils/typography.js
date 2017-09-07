import Typography from 'typography';

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
        width: '100%',
        height: '100%',
        overflowX: 'hidden',
        overflowY: 'auto'
      },
      body: {
        margin: 0,
        padding: 0
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
