import Tab from '@mui/material/Tab'
import styles from './styles'

function LinkTab (props) {
  return (
    <Tab
      sx={styles.tab}
      component='a'
      wrapped
      onClick={(e) => {
        e.preventDefault()
      }}
      {...props}
    />
  )
}

export default LinkTab