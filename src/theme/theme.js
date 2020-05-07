import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let customTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#907ad6',
    },
    secondary: {
      main: '#2c2a4a',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

customTheme = responsiveFontSizes(customTheme);

export default customTheme;
