import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#355a6c',
      light: '#91cfc2',
      dark: '#00701a'

    },
    secondary: {
      main: '#f9e247',
      light: '#ffffce',
      dark: '#b3bc6d'
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
