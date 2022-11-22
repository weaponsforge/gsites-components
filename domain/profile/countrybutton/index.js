import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const CountryButton = styled((props) => (
  <Button {...props} />
  /* eslint-disable no-unused-vars */
))(({ theme }) => ({
  width: '150px'
}))

export default CountryButton
