const colorPalette = {
  primary: '#0377c7',
  secondary: '#689090',
  black: '#130804',
  lightGray: '#7a7a7a',
  darkGray: '#a09e9e',
  white: 'white',
};

const screenSizes = {
  large: 900,
  unit: 'px',
};

export default {
  fonts: {
    family: 'Open Sans',
    fallbacks: ['open-sans'],
    weights: {
      light: 300,
      regular: 400,
      bold: 600,
    },
    sizes: {
      body: '1rem',
      heading: '1.5rem',
    },
  },
  colors: {
    ...colorPalette,
    textOnPrimaryBg: colorPalette.white,
  },
  boxShadow: `0px 2px 11px 1px ${colorPalette.lightGray}`,
  spacing: {
    pagePadding: '15px',
    lg: '35px',
    md: '15px',
    sm: '10px',
  },
  transition: '400ms ease',
  screenSizes: screenSizes,
  breakPoints: {
    lgUp: `(min-width: ${screenSizes.large}${screenSizes.unit})`,
    lgDown: `(max-width: ${screenSizes.large - 1}${screenSizes.unit})`,
  },
};
