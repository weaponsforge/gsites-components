import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const FullBox = styled(Box)(({ theme }) => ({
  width: '100%',
  // height: '100%',
  // minHeight: '100px',
  padding: theme.spacing(3)
}))

export default FullBox
