import {createMuiTheme} from '@material-ui/core/styles';
import {jaJP} from '@material-ui/core/locale';

const theme = createMuiTheme({
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
