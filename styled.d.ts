import theme from './src/ts/theme';

type CustomTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
