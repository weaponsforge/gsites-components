import PropTypes from 'prop-types'
import Container from '@mui/material/Container'
import AppCard from '@/components/common/ui/appcard'

function Section ({ maxWidth, children }) {
  const mWidth = maxWidth || 'md'

  return (
    <Container maxWidth={mWidth}>
      <AppCard>
        {children}
      </AppCard>
    </Container>
  )
}

Section.propTypes = {
  props: PropTypes.object,
  children: PropTypes.node
}

export default Section
