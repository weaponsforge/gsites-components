import PropTypes from 'prop-types'
import styles from '@/styles/Section.module.css'

function Section ({ children }) {
  return (
    <div className={styles.containersection}>
      {children}
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.node
}

export default Section
