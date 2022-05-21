export default {
  siteWidth: 1200,
  breakpoints: ['370px', '576px', '852px', '968px', '1080px'],
  mediaQueries: {
    xs: '@media screen and (min-width: 370px)',
    sm: '@media screen and (min-width: 576px)',
    md: '@media screen and (min-width: 852px)',
    lg: '@media screen and (min-width: 968px)',
    xl: '@media screen and (min-width: 1080px)',
    nav: '@media screen and (min-width: 968px)',
  },
  spacing: [0, 4, 8, 16, 24, 32, 48, 64],
  shadows: {
    level1: '0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)',
    active: '0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)',
    success: '0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)',
    warning: '0px 0px 0px 1px #5bbed7, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)',
    focus: '0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)',
    inset: 'inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)',
  },
  radii: { small: '4px', default: '16px', card: '10px', circle: '50%' },
  zIndices: { dropdown: 10, modal: 100 },
  isDark: false,
  alert: { background: '#FFFFFF' },
  button: {
    primary: {
      background: 'transparent',
      backgroundActive: '#5BBED7',
      backgroundHover: 'transparent',
      border: '1px solid #5BBED7',
      borderColorHover: 'currentColor',
      boxShadow: 'inset 0px -1px 0px rgba(14, 14, 44, 0.4)',
      boxShadowActive: 'inset 0px -1px 0px rgba(14, 14, 44, 0.4)',
      color: '#FFFFFF',
    },
    secondary: {
      background: 'transparent',
      backgroundActive: 'transparent',
      backgroundHover: 'transparent',
      border: '2px solid #ffffff',
      borderColorHover: '#ffffff',
      boxShadow: 'none',
      boxShadowActive: 'none',
      color: '#ffffff',
    },
    tertiary: {
      background: 'transparent',
      backgroundActive: 'transparent',
      backgroundHover: 'transparent',
      border: 0,
      borderColorHover: 'currentColor',
      boxShadow: 'none',
      boxShadowActive: 'none',
      color: '#9bf87d',
    },
    text: {
      background: 'transparent',
      backgroundActive: 'transparent',
      backgroundHover: 'transparent',
      border: 0,
      borderColorHover: 'currentColor',
      boxShadow: 'none',
      boxShadowActive: 'none',
      color: '#336a79',
    },
    danger: {
      background: '#5bbed7',
      backgroundActive: '#D43285',
      backgroundHover: '#5bbed7',
      border: 0,
      borderColorHover: 'currentColor',
      boxShadow: 'none',
      boxShadowActive: 'none',
      color: '#FFFFFF',
    },
    subtle: {
      background: '#151514',
      backgroundActive: '#336a79D9',
      backgroundHover: '#336a79B3',
      border: 0,
      borderColorHover: 'currentColor',
      boxShadow: 'none',
      boxShadowActive: 'none',
      color: '#FFFFFF',
    },
    success: {
      background: '#31D0AA',
      backgroundActive: '#31D0AAD9',
      backgroundHover: '#31D0AAB3',
      border: 0,
      borderColorHover: 'currentColor',
      boxShadow: 'none',
      boxShadowActive: 'none',
      color: '#FFFFFF',
    },
  },
  colors: {
    hamburgerIcon: '#000000',
    failure: '#5bbed7',
    primary: '#ffffff',
    primaryBright: '#aa8929',
    primaryDark: '#aa8929',
    secondary: '#ffffff',
    success: '#31D0AA',
    warning: '#FFB237',
    binance: '#F0B90B',
    background: '#000000',
    backgroundDisabled: '#111010',
    contrast: '#191326',
    invertedContrast: '#000000',
    input: 'transparent',
    tertiary: '#000000',
    text: '#ffffff',
    textDisabled: '#2c2c2c',
    textSubtle: '#ffffff',
    borderColor: '#4e4e4e',
    card: '#FFFFFF',
    gradients: { bubblegum: 'linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)' },
  },
  card: {
    background: '#000000',
    boxShadow: '0px 2px 10px 4px rgb(255 255 255 / 15%), 0px 1px 1px rgb(0 0 0 / 15%)',
    boxShadowActive: '0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)',
    boxShadowSuccess: '0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)',
    boxShadowWarning: '0px 0px 0px 1px #5bbed7, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)',
    cardHeaderBackground: 'linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)',
    dropShadow: 'drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))',
    // font-size: 1rem !important,
    // box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5) !important,
    // border: solid 1px transparent !important,
    // background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, #8ACF5F, #48C1EE),
    // background-origin: border-box !important,
    // background-clip: content-box, border-box !important,
    // box-shadow: 2px 1000px 1px #000 inset !important,
  },
  toggle: { handleBackground: '#FFFFFF' },
  nav: { topBackground: '#93329E', background: '#FFE3FE', hover: '#EEEAF4' },
  modal: { background: '#000000 !important' },
  radio: { handleBackground: '#FFFFFF' },
}
