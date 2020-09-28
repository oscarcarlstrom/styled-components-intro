const colorPalette = {
  primary: '#dc541b',
  secondary: '#dbd1cc',
  black: '#130804',
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
  },
  colors: {
    ...colorPalette,
    tinted: colorPalette.secondary,
  },
};
