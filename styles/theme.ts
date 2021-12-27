import { jaJP } from '@material-ui/core/locale';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4fc3f7',
    },
    secondary: {
      main: '#ff9800',
    },
  },
  typography: {
    fontFamily: [
      'Noto Sans JP',
      'sans-serif',
    ].join(','),
  },
}, jaJP);

export default theme;
