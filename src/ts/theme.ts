import globalTheme from '../styles/theme';
import cloneDeep from 'lodash.clonedeep';

const theme = cloneDeep(globalTheme);
theme.colors.primary = "#0377c7";

export default theme