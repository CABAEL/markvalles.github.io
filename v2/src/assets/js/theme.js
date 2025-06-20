import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#ace',
    },
    background: {
      default: '#f5f5f5',
    },
    text: {
      primary: '#333',
    },
  },
});

export default theme;
