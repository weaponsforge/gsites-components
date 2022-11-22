import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#355a6c',
      light: '#91cfc2',
      dark: '#3e4059'

    },
    secondary: {
      main: '#f9e247',
      light: '#ffffce',
      dark: '#b3bc6d'
    },
    tertiary: {
      main: '#43a047',
      light: '#76d275',
      dark: '#00701a'
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
