import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#43a047',
      light: '#76d275',
      dark: '#00701a'

    },
    secondary: {
      main: '#e6ee9c',
      light: '#ffffce',
      dark: '#b3bc6d'
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
