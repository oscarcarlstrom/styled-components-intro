const colorPalette = {
  primary: '#0377c7',
  secondary: '#689090',
  black: '#130804',
  lightGray: '#7a7a7a',
  white: 'white',
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
    horizontal: '10px',
  },
};
