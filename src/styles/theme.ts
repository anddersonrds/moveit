export default {
  font: {
    inter:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    rajdhani:
      "Rajdhani, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 400,
    normal: 500,
    bold: 600,
    sizes: {
      medium: '1rem'
    }
  },
  colors: {
    white: '#ffffff',
    dark: '#06092B',
    background: '#f2f3f5',
    grayLine: '#dcdde0',
    text: '#666666',
    textHighlight: '#b3b9ff',
    title: '#2e384d',
    red: '#e83f5b',
    green: '#4cd62b',
    blue: '#5965e0',
    blueDark: '#4953b8',
    blueTwitter: '#2aa9e0'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
