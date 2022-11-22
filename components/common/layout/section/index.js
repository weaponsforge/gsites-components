import PropTypes from 'prop-types'
import Container from '@mui/material/Container'
import AppCard from '@/components/common/ui/appcard'

function Section ({ children }) {
  return (
    <Container maxWidth='md'>
      <AppCard>
        {children}
      </AppCard>
    </Container>
  )
}

Section.propTypes = {
  children: PropTypes.node
}

export default Section
