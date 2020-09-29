import globalTheme from '../styles/theme';
import cloneDeep from 'lodash.clonedeep';

const theme = cloneDeep(globalTheme);
theme.colors.primary = '#f0d920';

export default theme;
