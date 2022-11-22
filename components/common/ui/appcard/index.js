import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'

const AppCard = styled(Card)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  marginTop: theme.spacing(3),
  boxShadow: `
    rgb(255 255 255) 0px 0px 0px 0px,
    rgb(0 0 0 / 5%) 0px 0px 0px 1px,
    rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%)
    0px 4px 6px -2px !important`
}))

export default AppCard
