import PropTypes from 'prop-types'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import LinkTab from '../linktab'
import styles from './styles'

function NavigationTabs ({ onTabSelect }) {
  const [value, setValue] = useState(0)

  const handleChange = (e, newValue) => {
    setValue(newValue)

    if (onTabSelect) {
      onTabSelect(newValue)
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='navigation tabs'
        sx={styles.tabs}
        variant='fullWidth'
        scrollButtons
        allowScrollButtonsMobile
      >
        <LinkTab label='Greenhouse Gas (GHG) Emmissions' href='#' />
        <LinkTab label='Climate Risks' href='#' />
        <LinkTab label='Climate Change and Vulnerability' href='#' />
        <LinkTab label='Adaptation and Mitigation Priorities' href='#' />
        <LinkTab label='Financing and Opportunities for ADB' href='#' />
      </Tabs>
    </Box>
  )
}

NavigationTabs.propTypes = {
  onTabSelect: PropTypes.func
}

export default NavigationTabs
